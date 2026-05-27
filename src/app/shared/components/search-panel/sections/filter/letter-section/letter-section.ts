import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';
import { FormsModule } from '@angular/forms';
import { WordFilters } from '../../../../../../features/words/models/word-filter.model';

@Component({
  selector: 'app-letter-section',
  imports: [FormsModule, SearchSectionComponent],
  templateUrl: './letter-section.html',
  styleUrl: './letter-section.css',
})
export class LetterSectionComponent {
  @Input() contains?: string[];
  @Input() notContains?: string[];

  @Output() valueChange = new EventEmitter<Partial<WordFilters>>();

  protected onContainsChange(value: string): void {
    this.emit({
      contains: value
        ? value.split(',').map(s => s.trim()).filter(Boolean)
        : undefined
    });
  }

  protected onNotContainsChange(value: string): void {
    this.emit({
      notContains: value
        ? value.split(',').map(s => s.trim()).filter(Boolean)
        : undefined
    });
  }

  private emit(partial: Partial<WordFilters>): void {
    this.valueChange.emit(partial);
  }
}
