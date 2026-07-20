import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CollapsibleHeaderComponent } from '../../../../../shared/components/search-panel/foundation/collapsible-header/collapsible-header.component';
import { SortSectionComponent } from '../sections/sort-section/sort-section.component';
import { GameTypeSectionComponent } from '../sections/game-type-section/game-type-section.component';
import { ExpandableContainerDirective } from '../../../../../shared/components/search-panel/foundation/directives/expandable-container.directive';
import { SavedGamesSearchSettings } from '../models/saved-games-search-settings';

@Component({
  selector: 'app-saved-games-settings-container',
  imports: [CollapsibleHeaderComponent, GameTypeSectionComponent, SortSectionComponent],
  templateUrl: './saved-games-settings-container.component.html',
  styleUrl: './saved-games-settings-container.component.css',
})
export class SavedGamesSettingsContainerComponent extends ExpandableContainerDirective {

  @Input({ required: true })
  settings!: SavedGamesSearchSettings;

  @Output()
  settingsChange = new EventEmitter<SavedGamesSearchSettings>();

  protected updateSettings(
    partial: Partial<SavedGamesSearchSettings>
  ): void {
    this.settingsChange.emit({
      ...this.settings,
      ...partial,
    });
  }
}