import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { PaginationInfoPanelComponent } from '../../../../shared/components/pagination/pagination-info-panel/pagination-info-panel.component';
import { PaginationNavigatorComponent } from '../../../../shared/components/pagination/pagination-navigator/pagination-navigator.component';
import { SavedGamesTableComponent } from '../../components/saved-games-table/saved-games-table.component';
import { LoadingStateComponent } from '../../../../shared/components/loading-state/loading-state.component';
import { ErrorStateComponent } from '../../../../shared/components/error-state/error-state.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { mapHttpError } from '../../../../shared/api/map-http-error';
import { SavedGameApiService } from '../../../../core/api/saved-game/saved-game-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorResponse } from '../../../../shared/api/error-response.model';
import { SavedGamesResponse } from '../../models/saved-games-response';
import { SavedGamesMainPanelComponent } from '../../components/saved-games-main-panel/saved-games-main-panel.component';
import { SavedGamesQuery } from '../../models/saved-games-query';
import { SavedGamesSearchSettings } from '../../components/saved-games-search-settings/models/saved-games-search-settings';
import { SavedGameSort } from '../../models/enums/saved-game-sort.enum';
import { SavedGameType } from '../../models/enums/saved-game-type.enum';

@Component({
  selector: 'app-saved-games-page',
  imports: [
    PaginationInfoPanelComponent,
    PaginationNavigatorComponent,
    SavedGamesTableComponent,
    LoadingStateComponent,
    ErrorStateComponent,
    EmptyStateComponent,
    SavedGamesMainPanelComponent,
  ],
  templateUrl: './saved-games-page.component.html',
  styleUrl: './saved-games-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedGamesPageComponent implements OnInit {

  private readonly savedGameApiService = inject(SavedGameApiService);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly loading = signal(true);
  protected readonly error = signal<ErrorResponse | null>(null);

  protected readonly response = signal<SavedGamesResponse | null>(null);

  protected query: SavedGamesQuery = {
    page: 0,
    size: 10,
  };

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.query = {
        gameType: params.get('gameType') as SavedGameType || undefined,
        sort: params.get('sort') as SavedGameSort || undefined,
        page: Number(params.get('page') ?? 0),
        size: Number(params.get('size') ?? 10),
      };
      this.loadSavedGames(this.query);
    });
  }

  private loadSavedGames(query: SavedGamesQuery): void {
    this.loading.set(true);
    this.error.set(null);

    this.savedGameApiService
      .getSavedGames(query)
      .subscribe({
        next: (response) => {
          this.response.set(response);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(mapHttpError(err));
          this.response.set(null);
          this.loading.set(false);
        }
      });
  }

  protected get searchSettings(): SavedGamesSearchSettings {
    return {
      gameType: this.query.gameType,
      sort: this.query.sort,
    };
  }

  protected get pageSizeConfig() {
    return {
      size: this.query.size ?? 10
    };
  }

  protected onQueryChange(event: {
    settings: SavedGamesSearchSettings;
    size: number;
  }): void {
    this.query = {
      ...this.query,
      ...event.settings,
      size: event.size,
      page: 0,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.buildQueryParams(),
    });
  }

  private buildQueryParams(): any {
    const params: any = {
      page: this.query.page,
      size: this.query.size,
    };

    if (this.query.gameType) {
      params.gameType = this.query.gameType;
    }

    if (this.query.sort) {
      params.sort = this.query.sort;
    }

    return params;
  }

  protected onResetAll(): void {
    this.query = {
      page: 0,
      size: 10,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: 0,
      },
    });
  }

  protected onPageChange(page: number): void {
    this.query = {
      ...this.query,
      page,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.buildQueryParams(),
    });
  }
}