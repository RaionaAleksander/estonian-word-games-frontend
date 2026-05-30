import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { PageSize } from '../models/page-size.model';
import { PageSizeSectionComponent } from '../sections/page-size-section/page-size-section.component';
import { CollapsibleHeaderComponent } from '../../foundation/collapsible-header/collapsible-header.component';
import { ExpandableContainerDirective } from '../../foundation/directives/expandable-container.directive';

@Component({
  selector: 'app-pagination-container',
  imports: [PageSizeSectionComponent, CollapsibleHeaderComponent],
  templateUrl: './pagination-container.component.html',
  styleUrl: './pagination-container.component.css',
})
export class PaginationContainerComponent extends ExpandableContainerDirective {
  
  @Input() pageSize!: PageSize;
  @Output() pageSizeChange = new EventEmitter<PageSize>();

  protected updateSize(partial: Partial<PageSize>): void {
    this.pageSizeChange.emit({
      ...this.pageSize,
      ...partial,
    });
  }
}