import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { WordSearchResponse } from '../../models/word-search-response.model';
import { ExportPanelComponent } from '../../../../../shared/export/components/export-panel/export-panel.component';
import { ExportSectionComponent } from '../../../../../shared/export/components/export-section/export-section.component';
import { JsonExportComponent } from '../../../../../shared/export/components/json-export/json-export.component';
import { DatabaseExportComponent } from '../../../../../shared/export/components/database-export/database-export.component';
import { PdfExportComponent } from '../../../../../shared/export/components/pdf-export/pdf-export.component';

@Component({
  selector: 'app-word-search-export',
  imports: [ExportPanelComponent, ExportSectionComponent, JsonExportComponent, DatabaseExportComponent, PdfExportComponent],
  templateUrl: './word-search-export.component.html',
  styleUrl: './word-search-export.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchExportComponent {
  readonly response = input.required<WordSearchResponse>();

  constructor() {
    effect(() => {
      const res = this.response();
      if (!res) return;
    });
  }
}