import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchPanelComponent } from '../../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';
import { ShapedGridSettingsContainerComponent } from '../word-search-settings/shaped-grid-settings-container/shaped-grid-settings-container.component';
import { ShapedWordSearchSettingsContainerComponent } from '../word-search-settings/shaped-ws-settings-container/shaped-ws-settings-container.component';
import { FilterContainerComponent } from '../../../../../shared/components/search-panel/filter/filter-container/filter-container.component';
import { SortContainerComponent } from '../../../../../shared/components/search-panel/sort/sort-container/sort-container.component';
import { PanelActionsComponent } from '../../../../../shared/components/search-panel/foundation/panel-actions/panel-actions.component';
import { ShapedWordSearchSettings } from '../../models/shaped-word-search-settings.model';
import { WordFilters } from '../../../../../shared/components/search-panel/filter/models/word-filter.model';
import { WordSort } from '../../../../../shared/components/search-panel/sort/models/word-sort.model';
import { ShapedWordSearchQuery } from '../../models/shaped-word-search-query.model';

@Component({
  selector: 'app-shaped-word-search-main-panel',
  imports: [
    SearchPanelComponent,
    ShapedGridSettingsContainerComponent,
    ShapedWordSearchSettingsContainerComponent,
    FilterContainerComponent,
    SortContainerComponent,
    PanelActionsComponent,
  ],
  templateUrl: './shaped-word-search-main-panel.component.html',
  styleUrl: './shaped-word-search-main-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapedWordSearchMainPanelComponent {

  @Input() settings!: ShapedWordSearchSettings;

  @Input() filters!: WordFilters;

  @Input() sort!: WordSort;

  @Output() settingsChange = new EventEmitter<ShapedWordSearchSettings>();

  @Output() filtersChange = new EventEmitter<WordFilters>();

  @Output() sortChange = new EventEmitter<WordSort>();

  @Output() applyAllEvent = new EventEmitter<ShapedWordSearchQuery>();

  @Output() resetAllEvent = new EventEmitter<void>();

  protected updateSettings(
    partial: Partial<ShapedWordSearchSettings>,
  ): void {
    this.settings = {
      ...this.settings,
      ...partial,
    };

    this.settingsChange.emit(this.settings);
  }

  protected updateFilters(
    partial: Partial<WordFilters>,
  ): void {
    this.filters = {
      ...this.filters,
      ...partial,
    };

    this.filtersChange.emit(this.filters);
  }

  protected updateSort(
    partial: Partial<WordSort>,
  ): void {
    this.sort = {
      ...this.sort,
      ...partial,
    };

    this.sortChange.emit(this.sort);
  }

  protected applyAll(): void {
    this.applyAllEvent.emit({
      settings: this.settings,
      filters: this.filters,
      sort: this.sort,
    });
  }

  protected resetAll(): void {
    this.settings = {
      rows: 10,
      cols: 10,
      blockedCells: [
        {
          row: 0,
          col: 0,
        },
      ],
      allowIntersections: true,
      directions: [],
      letterCase: undefined,
      wordsCount: 5,
      allowIncomplete: false,
    };

    this.filters = {};
    this.sort = {};

    this.resetAllEvent.emit();
  }
}