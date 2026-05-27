import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';
import { FormsModule } from '@angular/forms';
import { WordFilters } from '../../../../../../features/words/models/word-filter.model';

@Component({
  selector: 'app-excluded-words-section',
  imports: [FormsModule, SearchSectionComponent],
  templateUrl: './excluded-words-section.html',
  styleUrl: './excluded-words-section.css',
})
export class ExcludedWordsSectionComponent {
  @Input() excludedWords?: string[];
  @Output() valueChange = new EventEmitter<Partial<WordFilters>>();

  protected onExcludedChange(value: string): void {
    this.emit({
      excludedWords: value
        ? value.split(',').map(s => s.trim()).filter(Boolean)
        : undefined
    });
  }

  private emit(partial: Partial<WordFilters>): void {
    this.valueChange.emit(partial);
  }
}
