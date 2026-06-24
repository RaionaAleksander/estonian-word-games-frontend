import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WordSearchSettings } from '../word-search-settings/models/word-search-game-settings.model';
import { WordFilters } from '../../../../../shared/components/search-panel/filter/models/word-filter.model';
import { WordSearchSettingsContainerComponent } from '../word-search-settings/word-search-settings-container/word-search-settings-container.component';
import { FilterContainerComponent } from '../../../../../shared/components/search-panel/filter/filter-container/filter-container.component';
import { PanelActionsComponent } from '../../../../../shared/components/search-panel/foundation/panel-actions/panel-actions.component';
import { SearchPanelComponent } from '../../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';
import { WordSearchQuery } from '../../models/word-search-query.model';

@Component({
  selector: 'app-word-search-main-panel',
  templateUrl: './word-search-main-panel.component.html',
  styleUrl: './word-search-main-panel.component.css',
  imports: [
    WordSearchSettingsContainerComponent,
    FilterContainerComponent,
    PanelActionsComponent,
    SearchPanelComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchMainPanelComponent {

  @Input() settings!: WordSearchSettings;
  @Input() filters!: WordFilters;

  @Output() settingsChange = new EventEmitter<WordSearchSettings>();
  @Output() filtersChange = new EventEmitter<WordFilters>();

  @Output() applyAllEvent = new EventEmitter<WordSearchQuery>();

  @Output() resetAllEvent = new EventEmitter<void>();

  updateSettings(partial: Partial<WordSearchSettings>): void {
    this.settings = {
      ...this.settings,
      ...partial,
    };

    this.settingsChange.emit(this.settings);
  }

  updateFilters(partial: Partial<WordFilters>): void {
    this.filters = {
      ...this.filters,
      ...partial,
    };

    this.filtersChange.emit(this.filters);
  }

  applyAll(): void {
    this.applyAllEvent.emit({
      settings: this.settings,
      filters: this.filters,
    });
  }

  resetAll(): void {
    this.settings = {
      rows: 10,
      cols: 10,
      wordsCount: 5,
      allowIncomplete: false,
    };

    this.filters = {};

    this.resetAllEvent.emit();
  }
}