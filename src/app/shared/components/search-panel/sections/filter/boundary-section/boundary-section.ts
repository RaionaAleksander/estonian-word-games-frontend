import { Component, EventEmitter, Input, Output, signal, effect } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';

@Component({
  selector: 'app-boundary-section',
  imports: [SearchSectionComponent],
  templateUrl: './boundary-section.html',
  styleUrl: './boundary-section.css',
})
export class BoundarySectionComponent {
  @Input() startsWith?: string;
  @Input() endsWith?: string;

  @Output() valueChange = new EventEmitter<{ startsWith?: string; endsWith?: string }>();

  protected onStartsWithChange(value: string): void {
    this.startsWith = value || undefined;
    this.emit();
  }

  protected onEndsWithChange(value: string): void {
    this.endsWith = value || undefined;
    this.emit();
  }

  private emit(): void {
    this.valueChange.emit({
      startsWith: this.startsWith,
      endsWith: this.endsWith,
    });
  }
}
