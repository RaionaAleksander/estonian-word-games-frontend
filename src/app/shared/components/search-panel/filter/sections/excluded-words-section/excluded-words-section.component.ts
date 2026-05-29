import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { WordFilters } from '../../models/word-filter.model';
import { BaseFilterSectionComponent } from '../../base/base-filter-section.directive';

@Component({
  selector: 'app-excluded-words-section',
  imports: [SearchSectionComponent],
  templateUrl: './excluded-words-section.component.html',
  styleUrl: './excluded-words-section.component.css',
})
export class ExcludedWordsSectionComponent extends BaseFilterSectionComponent<WordFilters> {
  @Input() excludedWords?: string[];

  protected onExcludedChange(value: string): void {
    this.emit({
      excludedWords: this.parseArray(value)
    });
  }
}
