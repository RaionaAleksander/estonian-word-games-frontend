import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
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

  protected readonly isExpanded = signal(true);

  protected toggle(): void {
    this.isExpanded.update(value => !value);
  }

  protected readonly jsonPreview = computed(() =>
    JSON.stringify(this.response(), null, 2)
  );

  protected downloadJson(): void {
    const blob = new Blob(
      [JSON.stringify(this.response(), null, 2)],
      { type: 'application/json' }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'word-search.json';
    a.click();

    URL.revokeObjectURL(url);
  }

  protected downloadTxt(): void {
    const blob = new Blob([JSON.stringify(this.response(), null, 2)], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'word-search.txt';
    a.click();

    URL.revokeObjectURL(url);
  }
}