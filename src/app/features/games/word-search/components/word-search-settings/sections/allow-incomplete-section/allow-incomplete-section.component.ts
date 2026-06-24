import { Component, Input } from '@angular/core';
import { BaseGameSettingsSection } from '../../base/base-search-game-settings-section.directive';
import { WordSearchSettings } from '../../models/word-search-game-settings.model';
import { SectionFieldComponent } from '../../../../../../../shared/components/search-panel/foundation/section-field/section-field.component';
import { SectionRowComponent } from '../../../../../../../shared/components/search-panel/foundation/section-row/section-row.component';
import { SearchSectionComponent } from '../../../../../../../shared/components/search-panel/foundation/search-section/search-section.component';

@Component({
  selector: 'app-allow-incomplete-section',
  imports: [SearchSectionComponent, SectionRowComponent, SectionFieldComponent],
  templateUrl: './allow-incomplete-section.component.html',
  styleUrl: './allow-incomplete-section.component.css',
})
export class AllowIncompleteSectionComponent extends BaseGameSettingsSection<WordSearchSettings> {

  @Input() allowIncomplete: boolean = false;

  protected onChange(value: boolean): void {
    this.emit({ allowIncomplete: value });
  }
}