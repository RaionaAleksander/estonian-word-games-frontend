import { ChangeDetectionStrategy, Component, ElementRef, input, ViewChild } from '@angular/core';
import { WordSearchResponse } from '../../../../features/games/word-search/models/word-search-response.model';
import { DocumentPreviewComponent } from '../document-preview/document-preview.component';
import { WordSearchDocumentComponent } from '../word-search-document/word-search-document.component';

@Component({
  selector: 'app-pdf-export',
  imports: [DocumentPreviewComponent, WordSearchDocumentComponent],
  templateUrl: './pdf-export.component.html',
  styleUrl: './pdf-export.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfExportComponent {
  readonly data = input.required<WordSearchResponse>();

  protected downloadPdf(): void {
    console.log('Download PDF');
  }

  protected print(): void {
    console.log('Print');
  }
}