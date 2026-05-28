import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { WordFilters } from '../../../../../../features/words/models/word-filter.model';
import { BaseFilterSectionComponent } from '../../base/base-filter-section.directive';

@Component({
  selector: 'app-category-section',
  imports: [SearchSectionComponent],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.css',
})
export class CategorySectionComponent extends BaseFilterSectionComponent<WordFilters>{
  @Input() includeCategories?: string[];
  @Input() excludeCategories?: string[];

  protected onIncludeChange(value: string): void {
    this.emit({
      includeCategories : this.parseArray(value)
    });
  }

  protected onExcludeChange(value: string): void {
    this.emit({
      excludeCategories : this.parseArray(value)
    });
  }
}
