import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-letter-section',
  imports: [FormsModule, SearchSectionComponent],
  templateUrl: './letter-section.html',
  styleUrl: './letter-section.css',
})
export class LetterSectionComponent {
  @Input() contains?: string[];
  @Input() notContains?: string[];

  @Output() valueChange = new EventEmitter<{ contains?: string[]; notContains?: string[] }>();

  protected onContainsChange(value: string): void {
    this.contains = value ? value.split(',').map(s => s.trim()).filter(s => s) : undefined;
    this.emit();
  }

  protected onNotContainsChange(value: string): void {
    this.notContains = value ? value.split(',').map(s => s.trim()).filter(s => s) : undefined;
    this.emit();
  }

  protected containsValue(): string {
    return this.contains?.join(', ') ?? '';
  }

  protected notContainsValue(): string {
    return this.notContains?.join(', ') ?? '';
  }

  private emit(): void {
    this.valueChange.emit({
      contains: this.contains,
      notContains: this.notContains,
    });
  }
}
