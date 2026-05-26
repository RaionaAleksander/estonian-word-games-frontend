import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';

@Component({
  selector: 'app-category-section',
  imports: [SearchSectionComponent],
  templateUrl: './category-section.html',
  styleUrl: './category-section.css',
})
export class CategorySectionComponent {
  @Input() includeCategories?: string[];
  @Input() excludeCategories?: string[];

  @Output() valueChange = new EventEmitter<{ includeCategories?: string[]; excludeCategories?: string[] }>();

  protected onIncludeChange(value: string): void {
    this.includeCategories = value ? value.split(',').map(s => s.trim()).filter(s => s) : undefined;
    this.emit();
  }

  protected onExcludeChange(value: string): void {
    this.excludeCategories = value ? value.split(',').map(s => s.trim()).filter(s => s) : undefined;
    this.emit();
  }

  protected includeValue(): string {
    return this.includeCategories?.join(', ') ?? '';
  }

  protected excludeValue(): string {
    return this.excludeCategories?.join(', ') ?? '';
  }

  private emit(): void {
    this.valueChange.emit({
      includeCategories: this.includeCategories,
      excludeCategories: this.excludeCategories,
    });
  }
}
