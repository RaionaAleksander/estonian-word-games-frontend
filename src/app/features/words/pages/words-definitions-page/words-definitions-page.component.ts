import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { WordDefinitionsApiService } from '../../../../core/api/words/word-definitions-api.service';
import { ErrorResponse } from '../../../../shared/api/error-response.model';
import { WordDefinitionsResponse } from '../../models/word-definitions-response.model';
import { WordName } from '../../../../shared/components/search-panel/word-name/models/word-name.model';
import { WordLimit } from '../../../../shared/components/search-panel/limit/models/limit.model';
import { WordRandom } from '../../../../shared/components/search-panel/random/models/word-random.model';
import { mapHttpError } from '../../../../shared/api/map-http-error';
import { WordDefinitionsMainPanelComponent } from '../../components/word-definitions-main-panel/word-definitions-main-panel.component';
import { WordDefinitionsResultComponent } from '../../components/word-definitions-result/word-definitions-result.component';
import { LoadingStateComponent } from '../../../../shared/components/loading-state/loading-state.component';
import { ErrorStateComponent } from '../../../../shared/components/error-state/error-state.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { BreadcrumbsComponent } from '../../../../shared/components/navigation/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-words-definitions-page',
  imports: [
    WordDefinitionsMainPanelComponent, WordDefinitionsResultComponent,
    LoadingStateComponent, ErrorStateComponent, EmptyStateComponent, BreadcrumbsComponent],
  templateUrl: './words-definitions-page.component.html',
  styleUrl: './words-definitions-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsDefinitionsPageComponent {

  private readonly definitionsApi = inject(WordDefinitionsApiService);

  protected readonly loading = signal(false);

  protected readonly error = signal<ErrorResponse | null>(null);

  protected readonly response = signal<WordDefinitionsResponse | null>(null);

  protected word: WordName = { word: '', };
  protected limit: WordLimit = { limit: 10, };
  protected random: WordRandom = { random: false, };

  protected onWordChange(
    word: WordName
  ): void {
    this.word = word;
  }

  protected onLimitChange(
    limit: WordLimit
  ): void {
    this.limit = limit;
  }

  protected onRandomChange(
    random: WordRandom
  ): void {
    this.random = random;
  }

  protected onSearch(event: {
    word: WordName;
    limit: number;
    random: boolean;
  }): void {

    this.word = event.word;

    this.limit = {
      limit: event.limit,
    };

    this.random = {
      random: event.random,
    };

    if (!event.word.word.trim()) {
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.definitionsApi
      .getWordDefinitions(
        event.word.word,
        event.limit,
        event.random
      )
      .subscribe({
        next: (response) => {
          this.response.set(response);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(mapHttpError(err));
          this.response.set(null);
          this.loading.set(false);
        },
      });
  }

  protected onReset(): void {

    this.word = {
      word: '',
    };

    this.limit = {
      limit: 10,
    };

    this.random = {
      random: false,
    };

    this.response.set(null);
    this.error.set(null);
  }
}
