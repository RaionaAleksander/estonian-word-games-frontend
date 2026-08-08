import { Component, Input } from '@angular/core';
import { SectionFieldComponent } from '../../../../../../../shared/components/search-panel/foundation/section-field/section-field.component';
import { SectionRowComponent } from '../../../../../../../shared/components/search-panel/foundation/section-row/section-row.component';
import { SearchSectionComponent } from '../../../../../../../shared/components/search-panel/foundation/search-section/search-section.component';
import { BaseGameSettingsSection } from '../../base/base-search-game-settings-section.directive';
import { CustomWordSearchSettings } from '../../models/custom-word-search-setting.model';

@Component({
  selector: 'app-words-section',
  imports: [
    SearchSectionComponent,
    SectionRowComponent,
    SectionFieldComponent,
  ],
  templateUrl: './words-section.component.html',
  styleUrl: './words-section.component.css',
})
export class WordsSectionComponent extends BaseGameSettingsSection<CustomWordSearchSettings> {

  @Input() words: string[] = [];

  protected onChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    const sanitizedValue = input.value.replace(/[^\p{L},\s]/gu, '');

    input.value = sanitizedValue;

    this.emit({
      words: this.parseWords(sanitizedValue),
    });
  }

  private parseWords(value: string): string[] {
    return value
      .split(',')
      .map(word => word.trim())
      .filter(Boolean);
  }
}