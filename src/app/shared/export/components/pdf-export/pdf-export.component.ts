import { ChangeDetectionStrategy, Component, ElementRef, input, ViewChild } from '@angular/core';
import { WordSearchResponse } from '../../../../features/games/word-search/models/word-search-response.model';
import { DocumentPreviewComponent } from '../document-preview/document-preview.component';
import { WordSearchDocumentComponent } from '../word-search-document/word-search-document.component';
import { ExportPdfService } from '../../services/export-pdf.service';

@Component({
  selector: 'app-pdf-export',
  imports: [DocumentPreviewComponent, WordSearchDocumentComponent],
  templateUrl: './pdf-export.component.html',
  styleUrl: './pdf-export.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PdfExportComponent {
  readonly data = input.required<WordSearchResponse>();

  @ViewChild('document', { read: ElementRef })
  documentRef!: ElementRef<HTMLElement>;

  constructor(private pdf: ExportPdfService) {}

  downloadPdf(): void {
    const el = this.documentRef?.nativeElement;
    if (!el) return;

    this.pdf.exportFromElement(el);
  }
}