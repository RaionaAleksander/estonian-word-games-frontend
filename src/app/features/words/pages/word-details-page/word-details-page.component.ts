import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { WordDetailsApiService } from '../../../../core/api/words/word-details-api.service';
import { WordDetailsResponse } from '../../models/word-details-response.model';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { WordDetailsResultComponent } from '../../components/word-details-result/word-details-result.component';

@Component({
  selector: 'app-word-details-page',
  imports: [WordDetailsResultComponent, EmptyStateComponent],
  templateUrl: './word-details-page.component.html',
  styleUrl: './word-details-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordDetailsPageComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);

  private readonly wordDetailsApiService = inject(WordDetailsApiService);

  protected readonly loading = signal(true);

  protected readonly error = signal<string | null>(null);

  protected readonly result = signal<WordDetailsResponse | null>(null);

  protected readonly requestedWord = signal('');

  ngOnInit(): void {
    const lemma = this.route.snapshot.paramMap.get('lemma');

    console.log(
      this.route.snapshot.paramMap.get('lemma')
    );

    if (!lemma) {
      this.loading.set(false);
      return;
    }

    this.requestedWord.set(lemma);
    this.loadWord(lemma);
  }

  private loadWord(word: string): void {
    this.loading.set(true);
    this.error.set(null);

    this.wordDetailsApiService
      .getWordDetails(word)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.result.set(response);
          this.loading.set(false);
        },

        error: () => {
          this.error.set(
            'Failed to load word details'
          );
          this.loading.set(false);
        },
      });
  }

  protected formatWord(word: string): string {
    if (!word) return '';

    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
}