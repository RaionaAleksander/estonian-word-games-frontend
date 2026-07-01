import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-export-section',
  imports: [],
  templateUrl: './export-section.component.html',
  styleUrl: './export-section.component.css',
})
export class ExportSectionComponent {
  @Input({ required: true }) title!: string;

  protected readonly isExpanded = signal(false);

  protected toggle(): void {
    this.isExpanded.update(v => !v);
  }
}
