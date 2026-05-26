import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section';

@Component({
  selector: 'app-length-section',
  imports: [SearchSectionComponent],
  templateUrl: './length-section.html',
  styleUrl: './length-section.css',
})
export class LengthSectionComponent {

  @Input() minLength?: number;
  @Input() maxLength?: number;

  @Output() valueChange =
    new EventEmitter<{ minLength?: number; maxLength?: number }>();

  protected onMinChange(value: string): void {
    this.minLength = value ? Number(value) : undefined;
    this.emit();
  }

  protected onMaxChange(value: string): void {
    this.maxLength = value ? Number(value) : undefined;
    this.emit();
  }

  private emit(): void {
    this.valueChange.emit({
      minLength: this.minLength ?? undefined,
      maxLength: this.maxLength ?? undefined,
    });
  }
}