import { Component, Input } from '@angular/core';
import { BaseSortSectionDirective } from '../../base/base-sort-section.directive';
import { WordSort } from '../../models/word-sort.model';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';

@Component({
  selector: 'app-sort-section',
  imports: [SearchSectionComponent],
  templateUrl: './sort-section.component.html',
  styleUrl: './sort-section.component.css',
})
export class SortSectionComponent
  extends BaseSortSectionDirective<WordSort> {

  @Input() sort?: string;
  @Input() order?: string;

  protected onSortChange(value: string): void {
    this.emit({
      sort: value as any || undefined,
    });
  }

  protected onOrderChange(value: string): void {
    this.emit({
      order: value as any || undefined,
    });
  }
}