import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { WordSort } from '../models/word-sort.model';
import { SortSectionComponent } from '../sections/sort-section/sort-section.component';

@Component({
  selector: 'app-sort-container',
  imports: [SortSectionComponent],
  templateUrl: './sort-container.component.html',
  styleUrl: './sort-container.component.css',
})
export class SortContainerComponent {

  protected expanded = signal(true);

  @Input() sort!: WordSort;
  @Output() sortChange = new EventEmitter<WordSort>();

  protected toggle(): void {
    this.expanded.update(v => !v);
  }

  protected updateSort(partial: Partial<WordSort>): void {
    this.sortChange.emit({
      ...this.sort,
      ...partial,
    });
  }
}