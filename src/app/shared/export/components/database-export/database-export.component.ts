import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ExportSaveService } from '../../services/export-save.service';
import { WordSearchResponse } from '../../../../features/games/word-search/models/word-search-response.model';
import { finalize } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-database-export',
  imports: [RouterLink],
  templateUrl: './database-export.component.html',
  styleUrl: './database-export.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseExportComponent {

  private readonly saveService = inject(ExportSaveService);

  readonly data = input.required<WordSearchResponse>();

  protected readonly isSaving = signal(false);
  protected readonly isSaved = signal(false);
  protected readonly error = signal<string | null>(null);

  protected save(): void {

    if (this.isSaved()) {
      return;
    }

    this.isSaving.set(true);
    this.error.set(null);

    this.saveService.save(this.data())
      .pipe(
        finalize(() => this.isSaving.set(false))
      )
      .subscribe({
        next: () => {
          this.isSaved.set(true);
        },
        error: (err) => {
          this.error.set('Failed to save game');
          console.error(err);
        },
      });
  }
}