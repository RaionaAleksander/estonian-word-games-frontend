import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-excluded-words-section',
  imports: [FormsModule, SearchSectionComponent],
  templateUrl: './excluded-words-section.html',
  styleUrl: './excluded-words-section.css',
})
export class ExcludedWordsSectionComponent {
  @Input() excludedWords?: string[];
  @Output() valueChange = new EventEmitter<{ excludedWords?: string[] }>();

  protected onExcludedChange(value: string): void {
    this.excludedWords = value ? value.split(',').map(s => s.trim()).filter(s => s) : undefined;
    this.emit();
  }

  protected excludedValue(): string {
    return this.excludedWords?.join(', ') ?? '';
  }

  private emit(): void {
    this.valueChange.emit({
      excludedWords: this.excludedWords,
    });
  }
}
