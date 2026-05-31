import { Component, input } from '@angular/core';
import { WordSort } from '../../search-panel/sort/models/word-sort.model';

@Component({
  selector: 'app-sort-meta',
  imports: [],
  templateUrl: './sort-meta.component.html',
  styleUrl: './sort-meta.component.css',
})
export class SortMetaComponent {
  public readonly sort = input.required<WordSort>()
}
