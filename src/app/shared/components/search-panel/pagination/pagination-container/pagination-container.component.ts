import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { PageSize } from '../models/page-size.model';
import { PageSizeSectionComponent } from '../sections/page-size-section/page-size-section.component';

@Component({
  selector: 'app-pagination-container',
  imports: [PageSizeSectionComponent],
  templateUrl: './pagination-container.component.html',
  styleUrl: './pagination-container.component.css',
})
export class PaginationContainerComponent {

  protected expanded = signal(true);

  @Input() pageSize!: PageSize;
  @Output() pageSizeChange = new EventEmitter<PageSize>();

  protected toggle(): void {
    this.expanded.update(v => !v);
  }

  protected updateSize(partial: Partial<PageSize>): void {
    this.pageSizeChange.emit({
      ...this.pageSize,
      ...partial,
    });
  }
}