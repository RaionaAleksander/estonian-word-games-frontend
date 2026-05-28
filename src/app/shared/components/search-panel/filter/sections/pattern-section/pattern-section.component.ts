import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { WordFilters } from '../../../../../../features/words/models/word-filter.model';
import { BaseFilterSectionComponent } from '../../base/base-filter-section.directive';

@Component({
  selector: 'app-pattern-section',
  imports: [SearchSectionComponent],
  templateUrl: './pattern-section.component.html',
  styleUrl: './pattern-section.component.css',
})
export class PatternSectionComponent extends BaseFilterSectionComponent<WordFilters> {

  @Input() pattern?: string;

  protected onPatternChange(value: string): void {
    this.emit({
      pattern: this.normalizeString(value)
    });
  }

}