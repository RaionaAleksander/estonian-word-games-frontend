import { ChangeDetectionStrategy, Component, effect, input } from '@angular/core';
import { ExportPanelComponent } from '../../../../../shared/export/components/export-panel/export-panel.component';
import { ExportSectionComponent } from '../../../../../shared/export/components/export-section/export-section.component';
import { JsonExportComponent } from '../../../../../shared/export/components/json-export/json-export.component';
import { DocumentExportComponent } from '../../../../../shared/export/components/document-export/document-export.component';
import { WordSearchResponse } from '../../../../games/word-search/models/word-search-response.model';

@Component({
  selector: 'app-saved-word-search-export',
  imports: [ExportPanelComponent, ExportSectionComponent, JsonExportComponent, DocumentExportComponent],
  templateUrl: './saved-word-search-export.component.html',
  styleUrl: './saved-word-search-export.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SavedWordSearchExportComponent {
  readonly response = input.required<WordSearchResponse>();

  constructor() {
    effect(() => {
      const res = this.response();
      if (!res) return;
    });
  }
}