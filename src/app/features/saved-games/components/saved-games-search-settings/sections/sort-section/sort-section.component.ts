import { Component, Input } from '@angular/core';
import { SectionFieldComponent } from '../../../../../../shared/components/search-panel/foundation/section-field/section-field.component';
import { SectionRowComponent } from '../../../../../../shared/components/search-panel/foundation/section-row/section-row.component';
import { SearchSectionComponent } from '../../../../../../shared/components/search-panel/foundation/search-section/search-section.component';
import { BaseSavedGamesSettingsSection } from '../../base/base-saved-games-settings-section.directive';
import { SavedGamesSearchSettings } from '../../models/saved-games-search-settings';
import { SavedGameSort } from '../../../../models/enums/saved-game-sort.enum';

@Component({
  selector: 'app-sort-section',
  imports: [
    SearchSectionComponent,
    SectionRowComponent,
    SectionFieldComponent,
  ],
  templateUrl: './sort-section.component.html',
  styleUrl: './sort-section.component.css',
})
export class SortSectionComponent extends BaseSavedGamesSettingsSection<SavedGamesSearchSettings> {

  @Input()
  sort?: SavedGameSort;

  protected onSortChange(value: string): void {
    this.emit({
      sort: value as SavedGameSort || undefined,
    });
  }

}