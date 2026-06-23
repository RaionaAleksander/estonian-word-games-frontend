import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { WordSearchApiService } from '../../../../../core/api/games/word-search-api.service';
import { ErrorResponse } from '../../../../../shared/api/error-response.model';
import { WordSearchResponse } from '../../models/word-search-response.model';
import { WordSearchQuery } from '../../models/word-search-query.model';
import { GameMainPanelComponent } from '../../components/game-main-panel/game-main-panel.component';
import { ErrorStateComponent } from '../../../../../shared/components/error-state/error-state.component';
import { LoadingStateComponent } from '../../../../../shared/components/loading-state/loading-state.component';
import { EmptyStateComponent } from '../../../../../shared/components/empty-state/empty-state.component';
import { DatePipe } from '@angular/common';
import { WordFilters } from '../../../../../shared/components/search-panel/filter/models/word-filter.model';
import { WordSearchSettings } from '../../components/game-settings/models/word-search-game-settings.model';
import { mapHttpError } from '../../../../../shared/api/map-http-error';

@Component({
  selector: 'app-word-search-page',
  imports: [GameMainPanelComponent, ErrorStateComponent, LoadingStateComponent, EmptyStateComponent, DatePipe],
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
  };

  protected getGridRows(): string[][] {
    return this.response()?.grid.map(row => row.split('')) ?? [];
  }

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

    this.query.settings = {
      rows: 10,
      cols: 10,
      wordsCount: 5,
      allowIncomplete: false,
    };

    this.query.filters = {};

    this.response.set(null);
    this.error.set(null);
  }
}