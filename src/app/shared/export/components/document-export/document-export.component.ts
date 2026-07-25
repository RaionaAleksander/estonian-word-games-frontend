import { ChangeDetectionStrategy, Component, ElementRef, input, ViewChild } from '@angular/core';
import { WordSearchResponse } from '../../../../features/games/word-search/models/word-search-response.model';
import { DocumentPreviewComponent } from '../document-preview/document-preview.component';
import { WordSearchDocumentComponent } from '../word-search-document/word-search-document.component';
import { DocumentExportService } from '../../services/document-export.service';

@Component({
  selector: 'app-document-export',
  imports: [DocumentPreviewComponent, WordSearchDocumentComponent],
  templateUrl: './document-export.component.html',
  styleUrl: './document-export.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentExportComponent {
  readonly data = input.required<WordSearchResponse>();

  @ViewChild('document', { read: ElementRef })
  documentRef!: ElementRef<HTMLElement>;

  constructor(
    private documentExport: DocumentExportService
  ) {}

  downloadPdf(): void {
    const el = this.documentRef?.nativeElement;
    if (!el) return;

    this.documentExport.exportPdf(el);
  }

  downloadPng(): void {
    const el = this.documentRef?.nativeElement;
    if (!el) return;

    this.documentExport.exportPng(el);
  }
}