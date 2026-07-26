import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SectionFieldComponent } from '../../../../../../../shared/components/search-panel/foundation/section-field/section-field.component';
import { SectionRowComponent } from '../../../../../../../shared/components/search-panel/foundation/section-row/section-row.component';
import { SearchSectionComponent } from '../../../../../../../shared/components/search-panel/foundation/search-section/search-section.component';
import { FillAlphabet } from '../../../../models/fill-alphabet.model';
import { CustomWordSearchSettings } from '../../models/custom-word-search-setting.model';
import { BaseGameSettingsSection } from '../../base/base-search-game-settings-section.directive';

interface FillAlphabetSettings {
  fillAlphabet: FillAlphabet;
}

@Component({
  selector: 'app-fill-alphabet-section',
  imports: [
    SearchSectionComponent,
    SectionRowComponent,
    SectionFieldComponent,
  ],
  templateUrl: './fill-alphabet-section.component.html',
  styleUrl: './fill-alphabet-section.component.css',
})
export class FillAlphabetSectionComponent extends BaseGameSettingsSection<CustomWordSearchSettings> {

  @Input()
  fillAlphabet: FillAlphabet = 'ESTONIAN';

  protected onFillAlphabetChange(value: string): void {
    this.emit({
      fillAlphabet: value as FillAlphabet,
    });
  }
}