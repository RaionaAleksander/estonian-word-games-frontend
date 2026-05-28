import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { WordFilters } from '../../../../../features/words/models/word-filter.model';
import { ExcludedWordsSectionComponent } from '../sections/excluded-words-section/excluded-words-section.component';
import { LengthSectionComponent } from '../sections/length-section/length-section.component';
import { BoundarySectionComponent } from '../sections/boundary-section/boundary-section.component';
import { LetterSectionComponent } from '../sections/letter-section/letter-section.component';
import { CategorySectionComponent } from '../sections/category-section/category-section.component';
import { PatternSectionComponent } from '../sections/pattern-section/pattern-section.component';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrl: './filter-container.component.css',
  imports: [
    ExcludedWordsSectionComponent, 
    LengthSectionComponent, BoundarySectionComponent,
    LetterSectionComponent, CategorySectionComponent,
    PatternSectionComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterContainerComponent {

  protected expanded = signal(true);

  @Input() filters!: WordFilters;
  @Output() filtersChange = new EventEmitter<WordFilters>();

  protected toggle(): void {
    this.expanded.update(v => !v);
  }

  protected apply(filters: WordFilters): void {
    this.filtersChange.emit(filters);
  }

  protected reset(): void {
    this.filtersChange.emit({});
  }

  protected updateFilters(partial: Partial<WordFilters>): void {
    this.filtersChange.emit({
      ...this.filters,
      ...partial,
    });
  }
}