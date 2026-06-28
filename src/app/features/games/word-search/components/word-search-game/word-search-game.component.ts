import { ChangeDetectionStrategy, Component, computed, effect, input, Input, signal } from '@angular/core';
import { WordSearchVictoryComponent } from "../game/word-search-victory/word-search-victory.component";
import { WordSearchControlsComponent } from '../game/word-search-controls/word-search-controls.component';
import { WordSearchSidePanelComponent } from "../game/word-search-side-panel/word-search-side-panel.component";
import { WordSearchGridComponent } from '../game/word-search-grid/word-search-grid.component';
import { WordSearchWordsComponent } from '../game/word-search-words/word-search-words.component';
import { WordSearchResponse } from '../../models/word-search-response.model';
import { CellPosition } from '../../models/cell-position.model';
import { WordPlacement } from '../../models/word-placement.model';
import { WordSearchPlacement } from '../../models/word-search-placement.model';

@Component({
  selector: 'app-word-search-game',
  imports: [WordSearchSidePanelComponent, WordSearchControlsComponent, WordSearchVictoryComponent, 
    WordSearchGridComponent, WordSearchWordsComponent
  ],
  templateUrl: './word-search-game.component.html',
  styleUrl: './word-search-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchGameComponent {
  readonly response = input.required<WordSearchResponse>();

  constructor() {
    effect(() => {
      const res = this.response();

      if (!res) return;

      this.resetGameState();
    });
  }

  protected foundWords = signal<Set<string>>(new Set());
  protected foundCells = signal<Set<string>>(new Set());
  protected previewCells = signal<Set<string>>(new Set());
  protected zoomIndex = signal(2);

  private hoveredWord: string | null = null;
  private hoverTimeout?: number;
  private readonly zoomLevels = [0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0];

  protected readonly gridRows = computed(() =>
    this.response().grid.map(row => row.split('')) ?? []
  );

  protected readonly placements = computed(() => {
    return this.buildPlacements(this.response());
  });

  protected readonly isCompleted = computed(() =>
    this.foundWords().size === this.response().words.length
  );

  protected readonly zoom = computed(() =>
    this.zoomLevels[this.zoomIndex()]
  );

  canZoomIn = computed(() =>
    this.zoomIndex() < this.zoomLevels.length - 1
  );

  canZoomOut = computed(() =>
    this.zoomIndex() > 0
  );

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

  protected previewWord(word: string): void {
    this.hoveredWord = word;
    clearTimeout(this.hoverTimeout);

    this.hoverTimeout = window.setTimeout(() => {
      if (this.hoveredWord !== word) {
        return;
      }

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
    this.hoveredWord = null;
    clearTimeout(this.hoverTimeout);
    this.previewCells.set(new Set());
  }

  protected clearGameProgress(): void {
    this.foundWords.set(new Set());
    this.foundCells.set(new Set());
    this.previewCells.set(new Set());
  }

  protected onZoomIn(): void {
    this.zoomIndex.update(i => Math.min(i + 1, this.zoomLevels.length - 1));
  }

  protected onZoomOut(): void {
    this.zoomIndex.update(i => Math.max(i - 1, 0));
  }

  private resetGameState(): void {
    this.foundWords.set(new Set());
    this.foundCells.set(new Set());
    this.previewCells.set(new Set());

    this.hoveredWord = null;

    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = undefined;
    }
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

  private markWordAsFound(word: string, cells: CellPosition[]): void {
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

  private cellKey(row: number, col: number): string {
      return `${row}:${col}`;
  }
}