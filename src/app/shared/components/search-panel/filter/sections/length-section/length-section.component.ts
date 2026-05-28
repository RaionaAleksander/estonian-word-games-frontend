import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { WordFilters } from '../../../../../../features/words/models/word-filter.model';
import { BaseFilterSectionComponent } from '../../base/base-filter-section.directive';

@Component({
  selector: 'app-length-section',
  imports: [SearchSectionComponent],
  templateUrl: './length-section.component.html',
  styleUrl: './length-section.component.css',
})
export class LengthSectionComponent extends BaseFilterSectionComponent<WordFilters> {
  @Input() minLength?: number;
  @Input() maxLength?: number;

  protected onMinChange(value: string): void {
    this.emit({
      minLength: this.parseNumber(value)
    });
  }

  protected onMaxChange(value: string): void {
    this.emit({
      maxLength: this.parseNumber(value)
    });
  }
}