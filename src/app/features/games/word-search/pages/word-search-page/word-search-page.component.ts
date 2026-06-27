import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { WordSearchApiService } from '../../../../../core/api/games/word-search-api.service';
import { ErrorResponse } from '../../../../../shared/api/error-response.model';
import { WordSearchResponse } from '../../models/word-search-response.model';
import { WordSearchQuery } from '../../models/word-search-query.model';
import { WordSearchMainPanelComponent } from '../../components/word-search-main-panel/word-search-main-panel.component';
import { ErrorStateComponent } from '../../../../../shared/components/error-state/error-state.component';
import { LoadingStateComponent } from '../../../../../shared/components/loading-state/loading-state.component';
import { EmptyStateComponent } from '../../../../../shared/components/empty-state/empty-state.component';
import { mapHttpError } from '../../../../../shared/api/map-http-error';
import { QueryMetaPanelComponent } from '../../../../../shared/components/query-meta/query-meta-panel/query-meta-panel.component';
import { FilterMetaComponent } from '../../../../../shared/components/query-meta/filter-meta/filter-meta.component';
import { SortMetaComponent } from '../../../../../shared/components/query-meta/sort-meta/sort-meta.component';
import { WordSearchGridComponent } from '../../components/word-search-grid/word-search-grid.component';
import { WordSearchWordsComponent } from '../../components/word-search-words/word-search-words.component';
import { WordSearchInfoPanelComponent } from '../../components/word-search-info-panel/word-search-info-panel.component';
import { CellPosition } from '../../models/cell-position.model';
import { WordPlacement } from '../../models/word-placement.model'
import { WordSearchPlacement } from '../../models/word-search-placement.model';

@Component({
  selector: 'app-word-search-page',
  imports: [WordSearchMainPanelComponent, QueryMetaPanelComponent, FilterMetaComponent, SortMetaComponent,
    WordSearchGridComponent, WordSearchWordsComponent, WordSearchInfoPanelComponent,
    ErrorStateComponent, LoadingStateComponent, EmptyStateComponent],
  templateUrl: './word-search-page.component.html',
  styleUrl: './word-search-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchPageComponent {

  private readonly api = inject(WordSearchApiService);

  protected readonly loading = signal(false);
  protected readonly error = signal<ErrorResponse | null>(null);
  protected readonly response = signal<WordSearchResponse | null>(null);

  protected readonly gridRows = computed(() =>
    this.response()?.grid.map(row => row.split('')) ?? []
  );

  protected readonly placements = computed(() => {
    const res = this.response();
    return res ? this.buildPlacements(res) : [];
  });

  protected foundWords = signal<Set<string>>(new Set());

  protected foundCells = signal<Set<string>>(new Set());

  protected previewCells = signal<Set<string>>(new Set());

  private cellKey(row: number, col: number): string {
      return `${row}:${col}`;
  }

  protected query: WordSearchQuery = {
    settings: {
      rows: 10,
      cols: 10,
      wordsCount: 5,
      allowIncomplete: false,
    },
    filters: {},
    sort: {},
  };

  protected onQueryChange(query: WordSearchQuery): void {
    this.query = query;
    this.generateGame();
  }

  private generateGame(): void {

    this.loading.set(true);
    this.error.set(null);

    this.api.generateGame(this.query)
      .subscribe({
        next: (res) => {
          this.response.set(res);
          this.foundCells.set(new Set());
          this.foundWords.set(new Set());
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(mapHttpError(err));
          this.response.set(null);
          this.loading.set(false);
        },
      });
  }

  protected onReset(): void {

    this.query = {
      settings: {
        rows: 10,
        cols: 10,
        wordsCount: 5,
        allowIncomplete: false,
      },
      filters: {},
      sort: {},
    };

    this.response.set(null);
    this.error.set(null);
  }

  protected onSelection(path: CellPosition[]): void {
    const result = this.tryMatchWord(path);

    if (!result) {
      return;
    }

    if (this.foundWords().has(result.word)) {
      return;
    }

    this.markWordAsFound(result.word, result.cells);
  }

  private buildPlacements(response: WordSearchResponse): WordPlacement[] {
    return response.placements.map(p => ({
      word: p.word,
      cells: this.expandPlacement(p)
    }));
  }

  private expandPlacement(p: WordSearchPlacement): CellPosition[] {
    const directionMap: Record<string, { dr: number; dc: number }> = {
      LEFT: { dr: 0, dc: -1 },
      RIGHT: { dr: 0, dc: 1 },
      UP: { dr: -1, dc: 0 },
      DOWN: { dr: 1, dc: 0 },
      UP_LEFT: { dr: -1, dc: -1 },
      UP_RIGHT: { dr: -1, dc: 1 },
      DOWN_LEFT: { dr: 1, dc: -1 },
      DOWN_RIGHT: { dr: 1, dc: 1 },
    };

    const dir = directionMap[p.direction];

    const cells: CellPosition[] = [];

    for (let i = 0; i < p.word.length; i++) {
      cells.push({
        row: p.row + dir.dr * i,
        col: p.col + dir.dc * i,
      });
    }

    return cells;
  }

  private tryMatchWord(path: CellPosition[]): WordPlacement | null {
    return this.placements().find(p =>
      this.compareCells(p.cells, path)
    ) ?? null;
  }

  private compareCells(a: CellPosition[], b: CellPosition[]): boolean {
    if (a.length !== b.length) return false;

    const normal = a.every((cell, i) =>
      cell.row === b[i].row && cell.col === b[i].col
    );

    const reversed = a.every((cell, i) =>
      cell.row === b[b.length - 1 - i].row &&
      cell.col === b[b.length - 1 - i].col
    );

    return normal || reversed;
  }

  protected markWordAsFound(word: string, cells: CellPosition[]): void {
    this.foundWords.update(set => {
      const newSet = new Set(set);
      newSet.add(word);
      return newSet;
    });

    this.foundCells.update(current => {
      const next = new Set(current);
      cells.forEach(cell =>
        next.add(this.cellKey(cell.row, cell.col))
      );
      return next;
    });
  }

  private hoverTimeout?: number;

  protected previewWord(word: string): void {
    clearTimeout(this.hoverTimeout);

    this.hoverTimeout = window.setTimeout(() => {
      const placement = this.placements()
        .find(p => p.word === word);

      if (!placement) {
        return;
      }

      const next = new Set<string>();

      placement.cells.forEach(cell =>
        next.add(this.cellKey(cell.row, cell.col))
      );

      this.previewCells.set(next);
    }, 1500);
  }

  protected clearPreview(): void {
    this.previewCells.set(new Set());
  }
}