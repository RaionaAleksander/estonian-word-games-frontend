import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { EmptyStateComponent } from '../../../../../shared/components/empty-state/empty-state.component';
import { LoadingStateComponent } from '../../../../../shared/components/loading-state/loading-state.component';
import { ErrorStateComponent } from '../../../../../shared/components/error-state/error-state.component';
import { WordSearchExportComponent } from '../../components/word-search-export/word-search-export.component';
import { WordSearchGameComponent } from '../../components/word-search-game/word-search-game.component';
import { WordSearchInfoPanelComponent } from '../../components/word-search-info-panel/word-search-info-panel.component';
import { SortMetaComponent } from '../../../../../shared/components/query-meta/sort-meta/sort-meta.component';
import { QueryMetaPanelComponent } from '../../../../../shared/components/query-meta/query-meta-panel/query-meta-panel.component';
import { CustomWordSearchMainPanelComponent } from '../../components/custom-word-search-main-panel/custom-word-search-main-panel.component';
import { ErrorResponse } from '../../../../../shared/api/error-response.model';
import { WordSearchResponse } from '../../models/word-search-response.model';
import { CustomWordSearchQuery } from '../../models/custom-word-search-query.model';
import { mapHttpError } from '../../../../../shared/api/map-http-error';
import { WordSearchApiService } from '../../../../../core/api/games/word-search-api.service';

@Component({
  selector: 'app-word-search-custom-page',
  imports: [
    CustomWordSearchMainPanelComponent,
    QueryMetaPanelComponent,
    SortMetaComponent,
    WordSearchInfoPanelComponent,
    WordSearchGameComponent,
    WordSearchExportComponent,
    ErrorStateComponent,
    LoadingStateComponent,
    EmptyStateComponent,
  ],
  templateUrl: './word-search-custom-page.component.html',
  styleUrl: './word-search-custom-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchCustomPageComponent {

  private readonly api = inject(WordSearchApiService);

  protected readonly loading = signal(false);
  protected readonly error = signal<ErrorResponse | null>(null);
  protected readonly response = signal<WordSearchResponse | null>(null);

  protected query: CustomWordSearchQuery = {
    settings: {
      rows: 10,
      cols: 10,
      words: [],
      allowIntersections: true,
      directions: [],
      letterCase: undefined,
    },
    sort: {},
  };

  protected onQueryChange(query: CustomWordSearchQuery): void {
    this.query = query;
    this.generateGame();
  }

  private generateGame(): void {
    this.loading.set(true);
    this.error.set(null);

    this.api.generateCustomGame(this.query)
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
        words: [],
        allowIntersections: true,
        directions: [],
        letterCase: undefined,
      },
      sort: {},
    };

    this.response.set(null);
    this.error.set(null);
  }
}
