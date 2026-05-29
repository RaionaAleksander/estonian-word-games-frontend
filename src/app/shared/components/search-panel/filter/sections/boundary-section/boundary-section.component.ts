import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { WordFilters } from '../../models/word-filter.model';
import { BaseFilterSectionComponent } from '../../base/base-filter-section.directive';

@Component({
  selector: 'app-boundary-section',
  imports: [SearchSectionComponent],
  templateUrl: './boundary-section.component.html',
  styleUrl: './boundary-section.component.css',
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
