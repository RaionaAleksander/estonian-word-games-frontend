import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CellPosition } from '../../models/cell-position.model';

@Component({
  selector: 'app-word-search-grid',
  imports: [],
  templateUrl: './word-search-grid.component.html',
  styleUrl: './word-search-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchGridComponent {

  @Input({ required: true }) rows!: string[][];

  @Input({ required: true }) cols!: number;

  @Input() foundCells: Set<string> = new Set();

  @Input() previewCells: Set<string> = new Set();

  @Input({ required: true }) zoom: number = 1;

  @Output() selectionEnd = new EventEmitter<CellPosition[]>();

  private isMouseDown = false;

  private startCell: CellPosition | null = null;

  private currentCell: CellPosition | null = null;

  protected activePath: CellPosition[] = [];

  private cellKey(row: number, col: number): string {
    return `${row}:${col}`;
  }

  protected readonly baseCellSize = 32;

  protected get cellSize(): number {
    return this.baseCellSize * this.zoom;
  }

  onMouseDown(row: number, col: number): void {
    this.isMouseDown = true;

    this.startCell = { row, col };
    this.currentCell = { row, col };
  }

  onMouseEnter(row: number, col: number): void {
    if (!this.isMouseDown || !this.startCell) return;

    this.currentCell = { row, col };

    this.activePath = this.buildPath(this.startCell, this.currentCell);
  }

  onMouseUp(): void {
    if (!this.isMouseDown || !this.startCell || !this.currentCell) return;

    this.isMouseDown = false;

    const path = this.buildPath(this.startCell, this.currentCell);

    this.selectionEnd.emit(path);

    this.activePath = [];

    this.startCell = null;
    this.currentCell = null;
  }

  private buildPath(start: CellPosition, end: CellPosition): CellPosition[] {
    const dx = end.col - start.col;
    const dy = end.row - start.row;

    const stepX = dx === 0 ? 0 : dx / Math.abs(dx);
    const stepY = dy === 0 ? 0 : dy / Math.abs(dy);

    const isStraight =
      stepX === 0 ||
      stepY === 0 ||
      Math.abs(stepX) === Math.abs(stepY);

    if (!isStraight) {
      return [start];
    }

    const length = Math.max(Math.abs(dx), Math.abs(dy));

    const result: CellPosition[] = [];

    for (let i = 0; i <= length; i++) {
      result.push({
        row: start.row + stepY * i,
        col: start.col + stepX * i,
      });
    }

    return result;
  }

  isActive(row: number, col: number): boolean {
    return this.activePath.some(
      p => p.row === row && p.col === col
    );
  }

  protected isFound(row: number, col: number): boolean {
    return this.foundCells.has(
      this.cellKey(row, col)
    );
  }

  protected isPreview(row: number, col: number): boolean {
    return this.previewCells.has(
      this.cellKey(row, col)
    );
  }
}