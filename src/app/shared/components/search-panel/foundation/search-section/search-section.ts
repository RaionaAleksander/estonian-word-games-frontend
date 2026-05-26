import { Component, input } from '@angular/core';

@Component({
  selector: 'app-search-section',
  imports: [],
  templateUrl: './search-section.html',
  styleUrl: './search-section.css',
})
export class SearchSectionComponent {

  public readonly title = input.required<string>();

}