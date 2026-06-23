import { Component, Input } from '@angular/core';
import { BaseGameSettingsSection } from '../../base/base-game-settings-section.directive';
import { WordSearchSettings } from '../../models/word-search-game-settings.model';
import { SectionFieldComponent } from '../../../../../../../shared/components/search-panel/foundation/section-field/section-field.component';
import { SectionRowComponent } from '../../../../../../../shared/components/search-panel/foundation/section-row/section-row.component';
import { SearchSectionComponent } from '../../../../../../../shared/components/search-panel/foundation/search-section/search-section.component';

@Component({
  selector: 'app-words-count-section',
  imports: [SearchSectionComponent, SectionRowComponent, SectionFieldComponent],
  templateUrl: './words-count-section.component.html',
  styleUrl: './words-count-section.component.css',
})
export class WordsCountSectionComponent extends BaseGameSettingsSection<WordSearchSettings> {

  @Input() wordsCount: number = 5;

  protected onChange(value: string): void {
    this.emit({ wordsCount: Number(value) || 5 });
  }
}