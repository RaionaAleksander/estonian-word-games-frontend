import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { WordSearchApiService } from '../../../../../core/api/games/word-search-api.service';
import { ErrorResponse } from '../../../../../shared/api/error-response.model';
import { WordSearchResponse } from '../../models/word-search-response.model';
import { WordSearchQuery } from '../../models/word-search-query.model';
import { WordSearchMainPanelComponent } from '../../components/word-search-main-panel/word-search-main-panel.component';
import { ErrorStateComponent } from '../../../../../shared/components/error-state/error-state.component';
import { LoadingStateComponent } from '../../../../../shared/components/loading-state/loading-state.component';
import { EmptyStateComponent } from '../../../../../shared/components/empty-state/empty-state.component';
import { mapHttpError } from '../../../../../shared/api/map-http-error';
import { QueryMetaPanelComponent } from '../../../../../shared/components/query-meta/query-meta-panel/query-meta-panel.component';
import { FilterMetaComponent } from '../../../../../shared/components/query-meta/filter-meta/filter-meta.component';
import { SortMetaComponent } from '../../../../../shared/components/query-meta/sort-meta/sort-meta.component';
import { WordSearchInfoPanelComponent } from '../../components/word-search-info-panel/word-search-info-panel.component';
import { WordSearchGameComponent } from '../../components/word-search-game/word-search-game.component';

@Component({
  selector: 'app-word-search-page',
  imports: [WordSearchMainPanelComponent, QueryMetaPanelComponent, FilterMetaComponent, SortMetaComponent,
    WordSearchInfoPanelComponent, WordSearchGameComponent,
    ErrorStateComponent, LoadingStateComponent, EmptyStateComponent],
  templateUrl: './word-search-page.component.html',
  styleUrl: './word-search-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchPageComponent {
  private readonly api = inject(WordSearchApiService);

  protected readonly loading = signal(false);
  protected readonly error = signal<ErrorResponse | null>(null);
  protected readonly response = signal<WordSearchResponse | null>(null);

  protected query: WordSearchQuery = {
    settings: {
      rows: 10,
      cols: 10,
      wordsCount: 5,
      allowIncomplete: false,
    },
    filters: {},
    sort: {},
  };

  protected onQueryChange(query: WordSearchQuery): void {
    this.query = query;
    this.generateGame();
  }

  private generateGame(): void {
    this.loading.set(true);
    this.error.set(null);

    this.api.generateGame(this.query)
      .subscribe({
        next: (res) => {
          this.response.set(res);
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
    this.query = {
      settings: {
        rows: 10,
        cols: 10,
        wordsCount: 5,
        allowIncomplete: false,
      },
      filters: {},
      sort: {},
    };

    this.response.set(null);
    this.error.set(null);
  }
}