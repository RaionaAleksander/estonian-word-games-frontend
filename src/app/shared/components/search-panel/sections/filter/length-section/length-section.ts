import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';
import { WordFilters } from '../../../../../../features/words/models/word-filter.model';

@Component({
  selector: 'app-length-section',
  imports: [SearchSectionComponent],
  templateUrl: './length-section.html',
  styleUrl: './length-section.css',
})
export class LengthSectionComponent {

  @Input() minLength?: number;
  @Input() maxLength?: number;

  @Output() valueChange = new EventEmitter<Partial<WordFilters>>();

  protected onMinChange(value: string): void {
    this.emit({
      minLength: value ? Number(value) : undefined
    });
  }

  protected onMaxChange(value: string): void {
    this.emit({
      maxLength: value ? Number(value) : undefined
    });
  }

  private emit(partial: Partial<WordFilters>): void {
    this.valueChange.emit(partial);
  }
}