import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { WordFilters } from '../../models/word-filter.model';
import { BaseFilterSectionComponent } from '../../base/base-filter-section.directive';

@Component({
  selector: 'app-letter-section',
  imports: [SearchSectionComponent],
  templateUrl: './letter-section.component.html',
  styleUrl: './letter-section.component.css',
})
export class LetterSectionComponent extends BaseFilterSectionComponent<WordFilters> {
  @Input() contains?: string[];
  @Input() notContains?: string[];

  protected onContainsChange(value: string): void {
    this.emit({
      contains: this.parseArray(value)
    });
  }

  protected onNotContainsChange(value: string): void {
    this.emit({
      notContains: this.parseArray(value)
    });
  }
}
