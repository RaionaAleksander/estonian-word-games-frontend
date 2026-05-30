import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { WordSort } from '../models/word-sort.model';
import { SortSectionComponent } from '../sections/sort-section/sort-section.component';
import { CollapsibleHeaderComponent } from '../../foundation/collapsible-header/collapsible-header.component';
import { ExpandableContainerDirective } from '../../foundation/directives/expandable-container.directive';

@Component({
  selector: 'app-sort-container',
  imports: [SortSectionComponent, CollapsibleHeaderComponent],
  templateUrl: './sort-container.component.html',
  styleUrl: './sort-container.component.css',
})
export class SortContainerComponent extends ExpandableContainerDirective {

  @Input() sort!: WordSort;
  @Output() sortChange = new EventEmitter<WordSort>();

  protected updateSort(partial: Partial<WordSort>): void {
    this.sortChange.emit({
      ...this.sort,
      ...partial,
    });
  }
}