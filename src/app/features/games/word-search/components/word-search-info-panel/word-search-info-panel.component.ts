import { ChangeDetectionStrategy, Component, computed, Input } from '@angular/core';
import { WordSearchResponse } from '../../models/word-search-response.model';
import { WordSearchDirection } from '../../models/word-search-direction.model';

@Component({
  selector: 'app-word-search-info-panel',
  imports: [],
  templateUrl: './word-search-info-panel.component.html',
  styleUrl: './word-search-info-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchInfoPanelComponent {
  @Input({ required: true })
  response!: WordSearchResponse;

  protected get stats() {
    return this.analyzePlacements();
  }

  private readonly directionLabels: Record<string, string> = {
    RIGHT: '⭢',
    LEFT: '⭠',
    DOWN: '⭣',
    UP: '⭡',
    DOWN_RIGHT: '⭨',
    DOWN_LEFT: '⭩',
    UP_RIGHT: '⭧',
    UP_LEFT: '⭦',
  };

  protected get formattedDirections(): string {
    return this.response.usedDirections
      .map(direction => this.directionLabels[direction] ?? direction)
      .join(' ');
  }

  private readonly directionOffsets: Record<
    WordSearchDirection,
    { row: number; col: number }
  > = {
    RIGHT:      { row: 0,  col: 1 },
    LEFT:       { row: 0,  col: -1 },
    DOWN:       { row: 1,  col: 0 },
    UP:         { row: -1, col: 0 },
    DOWN_RIGHT: { row: 1,  col: 1 },
    DOWN_LEFT:  { row: 1,  col: -1 },
    UP_RIGHT:   { row: -1, col: 1 },
    UP_LEFT:    { row: -1, col: -1 },
  };

  private analyzePlacements() {
    const cells = new Map<string, number>();

    for (const placement of this.response.placements) {
      const { row, col, word } = placement;

      const delta = this.directionOffsets[placement.direction];

      for (let i = 0; i < word.length; i++) {
        const r = row + delta.row * i;
        const c = col + delta.col * i;

        const key = `${r}:${c}`;

        cells.set(key, (cells.get(key) ?? 0) + 1);
      }
    }

    let intersections = 0;

    for (const count of cells.values()) {
      if (count > 1) {
        intersections++;
      }
    }

    const occupiedCells = cells.size;
    const totalCells = this.response.rows * this.response.cols;

    return {
      occupiedCells,
      totalCells,
      fillPercentage: Math.round(
        occupiedCells / totalCells * 100
      ),
      intersections,
    };
  }
}