import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../../shared/components/navigation/breadcrumbs/breadcrumbs.component';
import { ShapedWordSearchMainPanelComponent } from '../../components/shaped-word-search-main-panel/shaped-word-search-main-panel.component';
import { QueryMetaPanelComponent } from '../../../../../shared/components/query-meta/query-meta-panel/query-meta-panel.component';
import { SortMetaComponent } from '../../../../../shared/components/query-meta/sort-meta/sort-meta.component';
import { WordSearchInfoPanelComponent } from '../../components/word-search-info-panel/word-search-info-panel.component';
import { WordSearchGameComponent } from '../../components/word-search-game/word-search-game.component';
import { WordSearchExportComponent } from '../../components/word-search-export/word-search-export.component';
import { ErrorStateComponent } from '../../../../../shared/components/error-state/error-state.component';
import { LoadingStateComponent } from '../../../../../shared/components/loading-state/loading-state.component';
import { EmptyStateComponent } from '../../../../../shared/components/empty-state/empty-state.component';
import { WordSearchApiService } from '../../../../../core/api/games/word-search-api.service';
import { ErrorResponse } from '../../../../../shared/api/error-response.model';
import { WordSearchResponse } from '../../models/word-search-response.model';
import { ShapedWordSearchQuery } from '../../models/shaped-word-search-query.model';
import { mapHttpError } from '../../../../../shared/api/map-http-error';
import { FilterMetaComponent } from '../../../../../shared/components/query-meta/filter-meta/filter-meta.component';

@Component({
  selector: 'app-shaped-word-search-page',
  imports: [
    ShapedWordSearchMainPanelComponent,
    QueryMetaPanelComponent,
    FilterMetaComponent, 
    SortMetaComponent,
    WordSearchInfoPanelComponent,
    WordSearchGameComponent,
    WordSearchExportComponent,
    ErrorStateComponent,
    LoadingStateComponent,
    EmptyStateComponent,
    BreadcrumbsComponent,
  ],
  templateUrl: './shaped-word-search-page.component.html',
  styleUrl: './shaped-word-search-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapedWordSearchPageComponent {

  private readonly api = inject(WordSearchApiService);

  protected readonly loading = signal(false);

  protected readonly error = signal<ErrorResponse | null>(null);

  protected readonly response = signal<WordSearchResponse | null>(null);

  protected query: ShapedWordSearchQuery = {
    settings: {
      rows: 10,
      cols: 10,
      blockedCells: [
        { row: 0, col: 0 },
      ],
      wordsCount: 5,
      allowIncomplete: false,
      allowIntersections: true,
      directions: [],
      letterCase: undefined,
    },
    filters: {},
    sort: {},
  };

  protected onQueryChange(query: ShapedWordSearchQuery): void {
    this.query = query;
    this.generateGame();
  }

  private generateGame(): void {
    this.loading.set(true);
    this.error.set(null);

    this.api.generateShapedGame(this.query)
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
        blockedCells: [
          { row: 0, col: 0 },
        ],
        wordsCount: 5,
        allowIncomplete: false,
        allowIntersections: true,
        directions: [],
        letterCase: undefined,
      },
      filters: {},
      sort: {},
    };

    this.response.set(null);
    this.error.set(null);
  }
}