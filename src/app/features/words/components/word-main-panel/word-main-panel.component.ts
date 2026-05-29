import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { WordFilters } from '../../../../shared/components/search-panel/filter/models/word-filter.model';
import { WordSort } from '../../../../shared/components/search-panel/sort/models/word-sort.model';
import { PageSize } from '../../../../shared/components/search-panel/pagination/models/page-size.model';
import { FilterContainerComponent } from '../../../../shared/components/search-panel/filter/filter-container/filter-container.component';
import { SortContainerComponent } from '../../../../shared/components/search-panel/sort/sort-container/sort-container.component';
import { PaginationContainerComponent } from '../../../../shared/components/search-panel/pagination/pagination-container/pagination-container.component';
import { WordQuery } from '../../models/word-query.model';
import { PanelActionsComponent } from '../../../../shared/components/search-panel/foundation/panel-actions/panel-actions.component';
import { SearchPanelComponent } from '../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';

@Component({
  selector: 'app-word-main-panel',
  templateUrl: './word-main-panel.component.html',
  styleUrl: './word-main-panel.component.css',
  imports: [
    FilterContainerComponent,
    SortContainerComponent,
    PaginationContainerComponent,
    PanelActionsComponent,
    SearchPanelComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordMainPanelComponent {

  @Input() filters: WordFilters = {};
  @Input() sort: WordSort = {};
  @Input() pageSize: PageSize = { size: 20 };

  @Output() filtersChange = new EventEmitter<WordFilters>();
  @Output() sortChange = new EventEmitter<WordSort>();
  @Output() pageSizeChange = new EventEmitter<PageSize>();

  @Output() applyAllEvent = new EventEmitter<{
    filters: WordFilters;
    sort: WordSort;
    size: number;
  }>();

  @Output() resetAllEvent = new EventEmitter<void>();

  updateFilters(partial: Partial<WordFilters>): void {
    this.filters = {
      ...this.filters,
      ...partial,
    };

    this.filtersChange.emit(this.filters);
  }

  updateSort(partial: Partial<WordSort>): void {
    this.sort = {
      ...this.sort,
      ...partial,
    };

    this.sortChange.emit(this.sort);
  }

  updatePageSize(partial: Partial<PageSize>): void {
    this.pageSize = {
      ...this.pageSize,
      ...partial,
    };

    this.pageSizeChange.emit(this.pageSize);
  }

  applyAll(): void {
    this.applyAllEvent.emit({
      filters: this.filters,
      sort: this.sort,
      size: this.pageSize.size
    });
  }

  resetAll(): void {
    this.filters = {};
    this.sort = {};
    this.pageSize = { size: 20 };

    this.resetAllEvent.emit();
  }
}