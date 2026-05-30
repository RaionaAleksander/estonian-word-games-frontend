import { Component, input } from '@angular/core';

@Component({
  selector: 'app-search-section',
  imports: [],
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.css',
})
export class SearchSectionComponent {
  public readonly title = input.required<string>();
}