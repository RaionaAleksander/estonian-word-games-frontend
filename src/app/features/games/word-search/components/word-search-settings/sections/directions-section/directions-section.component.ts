import { Component, Input } from '@angular/core';
import { SectionFieldComponent } from '../../../../../../../shared/components/search-panel/foundation/section-field/section-field.component';
import { SectionRowComponent } from '../../../../../../../shared/components/search-panel/foundation/section-row/section-row.component';
import { SearchSectionComponent } from '../../../../../../../shared/components/search-panel/foundation/search-section/search-section.component';
import { WordSearchDirection } from '../../../../models/word-search-direction.model';
import { BaseGameSettingsSection } from '../../base/base-search-game-settings-section.directive';
import { WordSearchSettings } from '../../models/word-search-game-settings.model';

@Component({
  selector: 'app-directions-section',
  imports: [
    SearchSectionComponent,
    SectionRowComponent,
    SectionFieldComponent,
  ],
  templateUrl: './directions-section.component.html',
  styleUrl: './directions-section.component.css',
})
export class DirectionsSectionComponent extends BaseGameSettingsSection<WordSearchSettings> {

  @Input() directions: WordSearchDirection[] = [];

  readonly availableDirections = Object.values(WordSearchDirection);

  protected onChange(value: string): void {
    this.emit({
      directions: this.parseDirections(value),
    });
  }

  private parseDirections(value: string): WordSearchDirection[] {
    return value
      .split(',')
      .map(v => v.trim().toUpperCase())
      .filter(v => Object.values(WordSearchDirection).includes(v as WordSearchDirection))
      .map(v => v as WordSearchDirection);
  }
}