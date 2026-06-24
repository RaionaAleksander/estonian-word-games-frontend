import { Component, Input } from '@angular/core';
import { BaseGameSettingsSection } from '../../base/base-search-game-settings-section.directive';
import { WordSearchSettings } from '../../models/word-search-game-settings.model';
import { SectionFieldComponent } from '../../../../../../../shared/components/search-panel/foundation/section-field/section-field.component';
import { SectionRowComponent } from '../../../../../../../shared/components/search-panel/foundation/section-row/section-row.component';
import { SearchSectionComponent } from '../../../../../../../shared/components/search-panel/foundation/search-section/search-section.component';

@Component({
  selector: 'app-grid-size-section',
  imports: [SearchSectionComponent, SectionRowComponent, SectionFieldComponent],
  templateUrl: './grid-size-section.component.html',
  styleUrl: './grid-size-section.component.css',
})
export class GridSizeSectionComponent extends BaseGameSettingsSection<WordSearchSettings> {

  @Input() rows: number = 10;
  @Input() cols: number = 10;

  protected onRowsChange(value: string): void {
    this.emit({ rows: Number(value) || 10 });
  }

  protected onColsChange(value: string): void {
    this.emit({ cols: Number(value) || 10 });
  }
}
