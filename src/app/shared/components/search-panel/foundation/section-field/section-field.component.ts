import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-field',
  imports: [],
  templateUrl: './section-field.component.html',
  styleUrl: './section-field.component.css',

  host: {
    class: 'flex-1 min-w-0'
  }
})
export class SectionFieldComponent {
  public readonly label = input.required<string>();
}
