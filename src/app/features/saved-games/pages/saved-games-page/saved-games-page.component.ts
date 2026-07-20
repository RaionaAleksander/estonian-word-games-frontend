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

@Component({
  selector: 'app-saved-games-page',
  imports: [
    PaginationInfoPanelComponent,
    PaginationNavigatorComponent,
    SavedGamesTableComponent,
    LoadingStateComponent,
    ErrorStateComponent,
    EmptyStateComponent,
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

  protected page = 0;
  protected size = 10;

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.page = Number(params.get('page') ?? 0);
      this.size = Number(params.get('size') ?? 10);
      this.loadSavedGames();
    });
  }

  private loadSavedGames(): void {
    this.loading.set(true);
    this.error.set(null);

    this.savedGameApiService.getSavedGames({
      page: this.page,
      size: this.size,
    })
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

  protected onPageChange(page: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page,
        size: this.size,
      },
    });
  }
}