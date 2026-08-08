import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchSectionComponent } from '../../../../../../../shared/components/search-panel/foundation/search-section/search-section.component';
import { CellCoordinate } from '../../../../models/cell-coordinate.model';
import { BaseGameSettingsSection } from '../../base/base-search-game-settings-section.directive';

@Component({
  selector: 'app-blocked-cells-section',
  imports: [
    SearchSectionComponent
  ],
  templateUrl: './blocked-cells-section.component.html',
  styleUrl: './blocked-cells-section.component.css',
})
export class BlockedCellsSectionComponent extends BaseGameSettingsSection<{ blockedCells: CellCoordinate[] }> implements OnChanges {

  @Input() rows = 10;

  @Input() cols = 10;

  @Input() blockedCells: CellCoordinate[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rows'] || changes['cols'] || changes['blockedCells']) {
      this.normalizeBlockedCells();
    }
  }

  protected get rowsArray(): number[] {
    return Array.from({ length: this.rows }, (_, index) => index);
  }

  protected get colsArray(): number[] {
    return Array.from({ length: this.cols }, (_, index) => index);
  }

  protected isBlocked(row: number, col: number): boolean {
    return this.blockedCells.some(
      cell => cell.row === row && cell.col === col
    );
  }

  protected toggleCell(row: number, col: number): void {
    const blocked = this.isBlocked(row, col);

    // At least one cell must remain blocked.
    if (blocked && this.blockedCells.length === 1) {
      return;
    }

    const updatedCells = blocked
      ? this.blockedCells.filter(
          cell => !(cell.row === row && cell.col === col)
        )
      : [
          ...this.blockedCells,
          { row, col },
        ];

    this.blockedCells = updatedCells;

    this.emit({
      blockedCells: updatedCells,
    });
  }

  private normalizeBlockedCells(): void {
    const validCells = this.blockedCells.filter(
      cell =>
        cell.row >= 0 &&
        cell.row < this.rows &&
        cell.col >= 0 &&
        cell.col < this.cols
    );

    if (validCells.length > 0) {
      this.blockedCells = validCells;
      return;
    }

    const initialCell: CellCoordinate = {
      row: 0,
      col: 0,
    };

    this.blockedCells = [initialCell];

    this.emit({
      blockedCells: this.blockedCells,
    });
  }
}