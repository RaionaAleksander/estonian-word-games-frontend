import { ChangeDetectionStrategy, Component, effect, input } from '@angular/core';
import { WordSearchResponse } from '../../models/word-search-response.model';

@Component({
  selector: 'app-word-search-export',
  imports: [],
  templateUrl: './word-search-export.component.html',
  styleUrl: './word-search-export.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchExportComponent {
  readonly response = input.required<WordSearchResponse>();

  constructor() {
    effect(() => {
      const res = this.response();
      if (!res) return;
    });
  }
}