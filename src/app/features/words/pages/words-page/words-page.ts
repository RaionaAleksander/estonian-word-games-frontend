import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Word } from '../../models/word.model';
import { RouterLink } from '@angular/router';
import { WordsApiService } from '../../../../core/api/words/words-api.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination';

@Component({
  selector: 'app-words-page',
  imports: [RouterLink, PaginationComponent],
  templateUrl: './words-page.html',
  styleUrl: './words-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsPageComponent implements OnInit {
  private readonly wordsApiService = inject(WordsApiService);

  protected readonly words = signal<Word[]>([]);

  protected readonly loading = signal(true);

  protected readonly error = signal<string | null>(null);

  protected readonly currentPage = signal(0);
  protected readonly totalPages = signal(1);
  protected readonly pageSize = signal(20);

  public ngOnInit(): void {
    this.loadWords();
  }

  private loadWords(): void {
    const page = this.currentPage();
    const size = this.pageSize();

    if (page < 0 || size <= 0) return;

    this.loading.set(true);

    this.wordsApiService.getWordsPage(page, size).subscribe({
      next: (response) => {
        this.words.set(response.words);
        this.totalPages.set(response.totalPages);

        const safePage =
          response.currentPage >= response.totalPages
            ? response.totalPages - 1
            : response.currentPage;

        this.currentPage.set(Math.max(0, safePage));

        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load words');
        this.loading.set(false);
      },
    });
  }

  protected onPageChange(page: number): void {
    this.currentPage.set(page);
    this.loadWords();
  }
}