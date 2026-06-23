import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WordSearchSettings } from '../game-settings/models/word-search-game-settings.model';
import { WordFilters } from '../../../../../shared/components/search-panel/filter/models/word-filter.model';
import { GameSettingsContainerComponent } from '../game-settings/game-settings-container/game-settings-container/game-settings-container.component';
import { FilterContainerComponent } from '../../../../../shared/components/search-panel/filter/filter-container/filter-container.component';
import { PanelActionsComponent } from '../../../../../shared/components/search-panel/foundation/panel-actions/panel-actions.component';
import { SearchPanelComponent } from '../../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';
import { WordSearchQuery } from '../../models/word-search-query.model';

@Component({
  selector: 'app-game-main-panel',
  templateUrl: './game-main-panel.component.html',
  styleUrl: './game-main-panel.component.css',
  imports: [
    GameSettingsContainerComponent,
    FilterContainerComponent,
    PanelActionsComponent,
    SearchPanelComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameMainPanelComponent {

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