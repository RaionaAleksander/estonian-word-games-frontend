import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CollapsibleHeaderComponent } from '../../../../../../shared/components/search-panel/foundation/collapsible-header/collapsible-header.component';
import { GridSizeSectionComponent } from '../sections/grid-size-section/grid-size-section.component';
import { ExpandableContainerDirective } from '../../../../../../shared/components/search-panel/foundation/directives/expandable-container.directive';
import { ShapedWordSearchSettings } from '../../../models/shaped-word-search-settings.model';
import { BlockedCellsSectionComponent } from '../sections/blocked-cells-section/blocked-cells-section.component';
import { CellCoordinate } from '../../../models/cell-coordinate.model';

@Component({
  selector: 'app-shaped-grid-settings-container',
  imports: [
    CollapsibleHeaderComponent,
    GridSizeSectionComponent,
    BlockedCellsSectionComponent,
  ],
  templateUrl: './shaped-grid-settings-container.component.html',
  styleUrl: './shaped-grid-settings-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapedGridSettingsContainerComponent extends ExpandableContainerDirective {

  @Input({ required: true }) rows!: number;

  @Input({ required: true }) cols!: number;

  @Input({ required: true }) blockedCells!: CellCoordinate[];

  @Output()
  settingsChange = new EventEmitter<{
    rows: number;
    cols: number;
    blockedCells: CellCoordinate[];
  }>();

  protected updateSettings(
    partial: Partial<{
      rows: number;
      cols: number;
      blockedCells: CellCoordinate[];
    }>,
  ): void {
    this.settingsChange.emit({
      rows: partial.rows ?? this.rows,
      cols: partial.cols ?? this.cols,
      blockedCells: partial.blockedCells ?? this.blockedCells,
    });
  }
}