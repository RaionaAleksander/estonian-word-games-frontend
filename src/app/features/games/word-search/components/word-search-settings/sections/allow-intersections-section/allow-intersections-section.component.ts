import { Component, Input } from '@angular/core';
import { SectionFieldComponent } from '../../../../../../../shared/components/search-panel/foundation/section-field/section-field.component';
import { SectionRowComponent } from '../../../../../../../shared/components/search-panel/foundation/section-row/section-row.component';
import { SearchSectionComponent } from '../../../../../../../shared/components/search-panel/foundation/search-section/search-section.component';
import { BaseGameSettingsSection } from '../../base/base-search-game-settings-section.directive';
import { WordSearchSettings } from '../../models/word-search-game-settings.model';

@Component({
  selector: 'app-allow-intersections-section',
  imports: [
    SearchSectionComponent,
    SectionRowComponent,
    SectionFieldComponent,
  ],
  templateUrl: './allow-intersections-section.component.html',
  styleUrl: './allow-intersections-section.component.css',
})
export class AllowIntersectionsSectionComponent
  extends BaseGameSettingsSection<WordSearchSettings> {

  @Input() allowIntersections = true;

  protected onChange(value: boolean): void {
    this.emit({ allowIntersections: value });
  }
}
