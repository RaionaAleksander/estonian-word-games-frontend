import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { WordSearchResponse } from '../../../../features/games/word-search/models/word-search-response.model';
import { DocumentPageComponent } from '../document-page/document-page.component';
import { DocumentLanguage } from '../../models/document-language.model';

@Component({
  selector: 'app-word-search-document',
  imports: [DocumentPageComponent],
  templateUrl: './word-search-document.component.html',
  styleUrl: './word-search-document.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchDocumentComponent {
  readonly response = input.required<WordSearchResponse>();
  readonly documentTitle = input('Sõnasegadik');
  readonly language = input<DocumentLanguage>('EN');

  private static readonly MAX_GRID_SIZE = 520;

  private static readonly MIN_CELL_SIZE = 16;

  private static readonly MAX_CELL_SIZE = 30;

  protected readonly labels = computed(() => {
    switch (this.language()) {
      case 'ET':
        return {
          name: 'Nimi',
          date: 'Kuupäev',
          words: 'Sõnad',
        };
      case 'RU':
        return {
          name: 'Имя',
          date: 'Дата',
          words: 'Слова',
        };
      default:
        return {
          name: 'Name',
          date: 'Date',
          words: 'Words',
        };
    }
  });

  protected readonly rows = computed(() =>
    this.response().grid.map(row =>
      row.split('').map(cell => cell === '.' ? '' : cell)
    )
  );

  protected readonly cols = computed(() =>
    this.response().cols
  );

  protected readonly cellSize = computed(() => {

    const rows = this.response().rows;
    const cols = this.response().cols;

    const largestSide = Math.max(rows, cols);

    const calculated =
      Math.floor(
        WordSearchDocumentComponent.MAX_GRID_SIZE / largestSide
      );

    return Math.min(
      WordSearchDocumentComponent.MAX_CELL_SIZE,
      Math.max(
        WordSearchDocumentComponent.MIN_CELL_SIZE,
        calculated,
      ),
    );
  });

  protected readonly fontSize = computed(() =>
    Math.floor(this.cellSize() * 0.58)
  );

  protected readonly wordColumns = computed(() => {

    const words = this.response().words;

    const columnCount = 3;

    const rowsPerColumn =
      Math.ceil(words.length / columnCount);

    return Array.from(
      { length: columnCount },
      (_, column) =>
        words.slice(
          column * rowsPerColumn,
          (column + 1) * rowsPerColumn,
        ),
    );
  });
}