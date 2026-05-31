import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WordFilters } from '../../../../shared/components/search-panel/filter/models/word-filter.model';
import { WordSort } from '../../../../shared/components/search-panel/sort/models/word-sort.model';
import { WordLimit } from '../../../../shared/components/search-panel/limit/models/limit.model';

import { FilterContainerComponent } from '../../../../shared/components/search-panel/filter/filter-container/filter-container.component';
import { SortContainerComponent } from '../../../../shared/components/search-panel/sort/sort-container/sort-container.component';
import { LimitContainerComponent } from '../../../../shared/components/search-panel/limit/limit-container/limit-container.component';
import { PanelActionsComponent } from '../../../../shared/components/search-panel/foundation/panel-actions/panel-actions.component';
import { SearchPanelComponent } from '../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';

@Component({
  selector: 'app-random-words-main-panel',
  templateUrl: './random-words-main-panel.component.html',
  styleUrl: './random-words-main-panel.component.css',
  imports: [
    FilterContainerComponent,
    SortContainerComponent,
    LimitContainerComponent,
    PanelActionsComponent,
    SearchPanelComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomWordsMainPanelComponent {

  @Input() filters: WordFilters = {};
  @Input() sort: WordSort = {};
  @Input() limit: WordLimit = { limit: 20 };

  @Output() filtersChange = new EventEmitter<WordFilters>();
  @Output() sortChange = new EventEmitter<WordSort>();
  @Output() limitChange = new EventEmitter<WordLimit>();

  @Output() applyAllEvent = new EventEmitter<{
    filters: WordFilters;
    sort: WordSort;
    limit: number;
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

  updateLimit(partial: Partial<WordLimit>): void {
    this.limit = {
      ...this.limit,
      ...partial,
    };

    this.limitChange.emit(this.limit);
  }

  applyAll(): void {
    this.applyAllEvent.emit({
      filters: this.filters,
      sort: this.sort,
      limit: this.limit.limit,
    });
  }

  resetAll(): void {
    this.filters = {};
    this.sort = {};
    this.limit = { limit: 20 };

    this.resetAllEvent.emit();
  }
}