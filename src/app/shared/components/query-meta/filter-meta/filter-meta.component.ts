import { Component, input } from '@angular/core';
import { WordFilters } from '../../search-panel/filter/models/word-filter.model';

@Component({
  selector: 'app-filter-meta',
  imports: [],
  templateUrl: './filter-meta.component.html',
  styleUrl: './filter-meta.component.css',
})
export class FilterMetaComponent {
  public readonly filters = input.required<WordFilters>();
}
