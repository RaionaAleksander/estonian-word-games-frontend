import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Word } from '../../models/word.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const page = Number(params.get('page')) || 0;
      const size = Number(params.get('size')) || 20;

      this.currentPage.set(page);
      this.pageSize.set(size);

      this.loadWords(page, size);
    });
  }

  private loadWords(page: number, size: number): void {

    if (page < 0 || size <= 0) return;

    this.loading.set(true);

    this.wordsApiService.getWordsPage(page, size).subscribe({
      next: (response) => {
        this.words.set(response.words);
        this.totalPages.set(response.totalPages);

        const safePage =
          response.totalPages > 0 &&
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
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page,
        size: this.pageSize(),
      },
      queryParamsHandling: 'merge',
    });
  }
}