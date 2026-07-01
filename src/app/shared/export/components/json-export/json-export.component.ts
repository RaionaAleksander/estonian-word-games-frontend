import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ExportDownloadService } from '../../services/export-download.service';

@Component({
  selector: 'app-json-export',
  imports: [],
  templateUrl: './json-export.component.html',
  styleUrl: './json-export.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonExportComponent {

  readonly data = input.required<unknown>();
  readonly fileName = input('export');

  private readonly exportService = inject(ExportDownloadService);

  protected readonly jsonPreview = computed(() =>
    JSON.stringify(this.data(), null, 2)
  )

  protected downloadJson(): void {
    this.exportService.downloadJson(
      this.data(),
      this.fileName(),
    );
  }

  protected downloadTxt(): void {
    this.exportService.downloadTxt(
      this.jsonPreview(),
      this.fileName(),
    );
  }
}