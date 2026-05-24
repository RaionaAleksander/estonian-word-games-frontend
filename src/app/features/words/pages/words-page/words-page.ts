import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Word } from '../../models/word.model';
import { RouterLink } from '@angular/router';
import { WordsApiService } from '../../../../core/api/words/words-api.service';

@Component({
  selector: 'app-words-page',
  imports: [RouterLink],
  templateUrl: './words-page.html',
  styleUrl: './words-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsPageComponent implements OnInit {
  private readonly wordsApiService = inject(WordsApiService);

  protected readonly words = signal<Word[]>([]);

  protected readonly loading = signal(true);

  protected readonly error = signal<string | null>(null);

  public ngOnInit(): void {
    this.loadWords();
  }

  private loadWords(): void {
    this.loading.set(true);

    this.wordsApiService.getWordsPage().subscribe({
      next: (response) => {
        this.words.set(response.words);

        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load words');

        this.loading.set(false);
      },
    });
  }
}