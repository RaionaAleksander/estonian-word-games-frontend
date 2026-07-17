import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchPanelComponent } from '../../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';
import { PanelActionsComponent } from '../../../../../shared/components/search-panel/foundation/panel-actions/panel-actions.component';
import { SortContainerComponent } from '../../../../../shared/components/search-panel/sort/sort-container/sort-container.component';
import { CustomWordSearchSettingsContainerComponent } from '../word-search-settings/custom-ws-settings-container/custom-word-search-settings-container.component';
import { CustomWordSearchSettings } from '../word-search-settings/models/custom-word-search-setting.model';
import { WordSort } from '../../../../../shared/components/search-panel/sort/models/word-sort.model';
import { CustomWordSearchQuery } from '../../models/custom-word-search-query.model';
import { WordsSectionComponent } from '../word-search-settings/sections/words-section/words-section.component';

@Component({
  selector: 'app-custom-word-search-main-panel',
  imports: [
    CustomWordSearchSettingsContainerComponent,
    WordsSectionComponent,
    SortContainerComponent,
    PanelActionsComponent,
    SearchPanelComponent,
  ],
  templateUrl: './custom-word-search-main-panel.component.html',
  styleUrl: './custom-word-search-main-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomWordSearchMainPanelComponent {

  @Input() settings!: CustomWordSearchSettings;
  @Input() sort!: WordSort;

  @Output() settingsChange = new EventEmitter<CustomWordSearchSettings>();
  @Output() sortChange = new EventEmitter<WordSort>();

  @Output() applyAllEvent = new EventEmitter<CustomWordSearchQuery>();

  @Output() resetAllEvent = new EventEmitter<void>();

  updateSettings(partial: Partial<CustomWordSearchSettings>): void {
    this.settings = {
      ...this.settings,
      ...partial,
    };

    this.settingsChange.emit(this.settings);
  }

  updateSort(partial: Partial<WordSort>): void {
    this.sort = {
      ...this.sort,
      ...partial,
    };

    this.sortChange.emit(this.sort);
  }

  applyAll(): void {
    this.applyAllEvent.emit({
      settings: this.settings,
      sort: this.sort,
    });
  }

  resetAll(): void {
    this.settings = {
      rows: 10,
      cols: 10,
      words: [],
      allowIntersections: true,
      directions: [],
      letterCase: undefined,
    };

    this.sort = {};

    this.resetAllEvent.emit();
  }
}