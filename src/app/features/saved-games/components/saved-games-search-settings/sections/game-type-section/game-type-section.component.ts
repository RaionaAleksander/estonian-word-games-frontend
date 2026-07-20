import { Component, Input } from '@angular/core';
import { SearchSectionComponent } from '../../../../../../shared/components/search-panel/foundation/search-section/search-section.component';
import { SectionRowComponent } from '../../../../../../shared/components/search-panel/foundation/section-row/section-row.component';
import { SectionFieldComponent } from '../../../../../../shared/components/search-panel/foundation/section-field/section-field.component';
import { BaseSavedGamesSettingsSection } from '../../base/base-saved-games-settings-section.directive';
import { SavedGamesSearchSettings } from '../../models/saved-games-search-settings';
import { SavedGameType } from '../../../../models/enums/saved-game-type.enum';

@Component({
  selector: 'app-game-type-section',
  imports: [
    SearchSectionComponent,
    SectionRowComponent,
    SectionFieldComponent,
  ],
  templateUrl: './game-type-section.component.html',
  styleUrl: './game-type-section.component.css',
})
export class GameTypeSectionComponent extends BaseSavedGamesSettingsSection<SavedGamesSearchSettings> {

  @Input()
  gameType?: SavedGameType;

  protected onGameTypeChange(value: string): void {
    this.emit({
      gameType: value as SavedGameType || undefined,
    });
  }
}