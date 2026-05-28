import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';
import { WordFilters } from '../../../../../../features/words/models/word-filter.model';
import { BaseFilterSectionComponent } from '../../base/base-filter-section.directive';

@Component({
  selector: 'app-excluded-words-section',
  imports: [SearchSectionComponent],
  templateUrl: './excluded-words-section.html',
  styleUrl: './excluded-words-section.css',
})
export class ExcludedWordsSectionComponent extends BaseFilterSectionComponent<WordFilters> {
  @Input() excludedWords?: string[];

  protected onExcludedChange(value: string): void {
    this.emit({
      excludedWords: this.parseArray(value)
    });
  }
}
