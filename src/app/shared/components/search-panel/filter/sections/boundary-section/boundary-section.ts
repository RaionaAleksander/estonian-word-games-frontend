import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';
import { WordFilters } from '../../../../../../features/words/models/word-filter.model';
import { BaseFilterSectionComponent } from '../../base/base-filter-section.directive';

@Component({
  selector: 'app-boundary-section',
  imports: [SearchSectionComponent],
  templateUrl: './boundary-section.html',
  styleUrl: './boundary-section.css',
})
export class BoundarySectionComponent extends BaseFilterSectionComponent<WordFilters> {
  @Input() startsWith?: string;
  @Input() endsWith?: string;

  protected onStartsWithChange(value: string): void {
    this.emit({ startsWith: this.normalizeString(value) });
  }

  protected onEndsWithChange(value: string): void {
    this.emit({ endsWith: this.normalizeString(value) });
  }
}
