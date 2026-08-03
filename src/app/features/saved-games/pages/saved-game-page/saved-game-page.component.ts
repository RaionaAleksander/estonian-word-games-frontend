import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SavedGameApiService } from '../../../../core/api/saved-game/saved-game-api.service';
import { ErrorResponse } from '../../../../shared/api/error-response.model';
import { ErrorStateComponent } from '../../../../shared/components/error-state/error-state.component';
import { LoadingStateComponent } from '../../../../shared/components/loading-state/loading-state.component';
import { SavedGameViewComponent } from '../../components/saved-game-view/saved-game-view.component';
import { SavedGameParserService } from '../../services/saved-game-parser.service';
import { SavedGameResponse } from '../../models/responses/saved-game-response';
import { mapHttpError } from '../../../../shared/api/map-http-error';
import { BreadcrumbsComponent } from '../../../../shared/components/navigation/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-saved-game-page',
  imports: [ErrorStateComponent, LoadingStateComponent, SavedGameViewComponent, BreadcrumbsComponent],
  templateUrl: './saved-game-page.component.html',
  styleUrl: './saved-game-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedGamePageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(SavedGameApiService);

  protected readonly loading = signal(true);
  protected readonly error = signal<ErrorResponse | null>(null);
  protected readonly response = signal<SavedGameResponse | null>(null);

  protected gameId!: number;

  public ngOnInit(): void {
    this.gameId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.loadGame();
  }

  private readonly parser = inject(
    SavedGameParserService
  );

  private loadGame(): void {
    this.loading.set(true);
    this.error.set(null);

    this.api.getSavedGame(this.gameId)
      .subscribe({
      next:(data)=>{
        const game = this.parser.parse(data);
        this.response.set(game);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(mapHttpError(err));
        this.response.set(null);
        this.loading.set(false);
      }
    });
  }
}