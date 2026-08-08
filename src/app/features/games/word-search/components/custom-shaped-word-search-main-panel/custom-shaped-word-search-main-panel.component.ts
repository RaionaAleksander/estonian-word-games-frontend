import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchPanelComponent } from '../../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';
import { WordsSectionComponent } from '../word-search-settings/sections/words-section/words-section.component';
import { ShapedGridSettingsContainerComponent } from '../word-search-settings/shaped-grid-settings-container/shaped-grid-settings-container.component';
import { CustomShapedWordSearchSettingsContainerComponent } from '../word-search-settings/custom-shaped-ws-settings-container/custom-shaped-ws-settings-container.component';
import { SortContainerComponent } from '../../../../../shared/components/search-panel/sort/sort-container/sort-container.component';
import { PanelActionsComponent } from '../../../../../shared/components/search-panel/foundation/panel-actions/panel-actions.component';
import { CustomShapedWordSearchSettings } from '../../models/custom-shaped-word-search-settings.model';
import { WordSort } from '../../../../../shared/components/search-panel/sort/models/word-sort.model';
import { CustomShapedWordSearchQuery } from '../../models/custom-shaped-word-search-query.model';

@Component({
  selector: 'app-custom-shaped-word-search-main-panel',
  imports: [
    SearchPanelComponent,
    WordsSectionComponent,
    ShapedGridSettingsContainerComponent,
    CustomShapedWordSearchSettingsContainerComponent,
    SortContainerComponent,
    PanelActionsComponent,
  ],
  templateUrl: './custom-shaped-word-search-main-panel.component.html',
  styleUrl: './custom-shaped-word-search-main-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomShapedWordSearchMainPanelComponent {

  @Input() settings!: CustomShapedWordSearchSettings;

  @Input() sort!: WordSort;

  @Output() settingsChange = new EventEmitter<CustomShapedWordSearchSettings>();

  @Output() sortChange = new EventEmitter<WordSort>();

  @Output() applyAllEvent = new EventEmitter<CustomShapedWordSearchQuery>();

  @Output() resetAllEvent = new EventEmitter<void>();

  protected updateSettings(
    partial: Partial<CustomShapedWordSearchSettings>,
  ): void {
    this.settings = {
      ...this.settings,
      ...partial,
    };

    this.settingsChange.emit(this.settings);
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
      words: [],
      letterCase: undefined,
      fillAlphabet: 'ESTONIAN',
      allowIntersections: true,
      directions: [],
    };

    this.sort = {};

    this.resetAllEvent.emit();
  }
}