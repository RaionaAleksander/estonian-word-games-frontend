import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { WordExistsResponse } from '../../models/word-exists-response.model';
import { WordExistsApiService } from '../../../../core/api/words/word-exists-api.service';
import { WordExistsMainPanelComponent } from '../../components/word-exists-main-panel/word-exists-main-panel.component';
import { WordExistsResultComponent } from '../../components/word-exists-result/word-exists-result.component';
import { WordName } from '../../../../shared/components/search-panel/word-name/models/word-name.model';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-words-exists-page',
  imports: [WordExistsMainPanelComponent, WordExistsResultComponent, EmptyStateComponent],
  templateUrl: './words-exists-page.component.html',
  styleUrl: './words-exists-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsExistsPageComponent {
  protected readonly loading = signal(false);

  protected readonly error = signal<string | null>(null);

  protected readonly result =
    signal<WordExistsResponse | null>(null);

  protected word: WordName = { word: '' };

  private readonly wordExistsApiService = inject(WordExistsApiService);

  private readonly search$ = new Subject<string>();

  ngOnInit() {
    this.search$
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(word => this.callApi(word));
  }

  private callApi(word: string): void {
    if (!word.trim()) {
      this.result.set(null);
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.wordExistsApiService
      .checkWordExists(word)
      .subscribe({
        next: (response) => {
          this.result.set(response);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Failed to check word');
          this.loading.set(false);
        },
      });
  }

  protected onWordChange(word: WordName): void {

    this.word = word;

    this.search$.next(word.word);
  }

  protected onReset(): void {

    this.word = { word: '' };

    this.result.set(null);
    this.error.set(null);

    this.search$.next('');
  }
}
