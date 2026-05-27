import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';
import { WordFilters } from '../../../../../../features/words/models/word-filter.model';

@Component({
  selector: 'app-boundary-section',
  imports: [SearchSectionComponent],
  templateUrl: './boundary-section.html',
  styleUrl: './boundary-section.css',
})
export class BoundarySectionComponent {
  @Input() startsWith?: string;
  @Input() endsWith?: string;

  @Output() valueChange = new EventEmitter<Partial<WordFilters>>();

  protected onStartsWithChange(value: string): void {
    this.emit({ startsWith: value || undefined });
  }

  protected onEndsWithChange(value: string): void {
    this.emit({ endsWith: value || undefined });
  }

  private emit(partial: Partial<WordFilters>): void {
    this.valueChange.emit(partial);
  }
}
