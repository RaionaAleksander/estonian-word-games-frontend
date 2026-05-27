import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';
import { WordFilters } from '../../../../../../features/words/models/word-filter.model';

@Component({
  selector: 'app-category-section',
  imports: [SearchSectionComponent],
  templateUrl: './category-section.html',
  styleUrl: './category-section.css',
})
export class CategorySectionComponent {
  @Input() includeCategories?: string[];
  @Input() excludeCategories?: string[];

  @Output() valueChange = new EventEmitter<Partial<WordFilters>>();

  protected onIncludeChange(value: string): void {
    this.emit({
      includeCategories : value 
        ? value.split(',').map(s => s.trim()).filter(s => s)
        : undefined
    });
  }

  protected onExcludeChange(value: string): void {
    this.emit({
      excludeCategories : value 
        ? value.split(',').map(s => s.trim()).filter(s => s)
        : undefined
    });
  }

  private emit(partial: Partial<WordFilters>): void {
    this.valueChange.emit(partial);
  }
}
