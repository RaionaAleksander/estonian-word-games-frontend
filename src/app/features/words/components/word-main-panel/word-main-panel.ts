import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { WordFilters } from '../../models/word-filter.model';
import { FilterContainerComponent } from '../../../../shared/components/search-panel/filter-container/filter-container';
import { PanelActionsComponent } from '../../../../shared/components/search-panel/foundation/panel-actions/panel-actions';
import { SearchPanelComponent } from '../../../../shared/components/search-panel/foundation/search-panel/search-panel';

@Component({
  selector: 'app-word-main-panel',
  templateUrl: './word-main-panel.html',
  styleUrl: './word-main-panel.css',
  imports: [
    FilterContainerComponent,
    PanelActionsComponent,
    SearchPanelComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordMainPanelComponent {

  @Input() filters: WordFilters = {};

  @Output() filtersChange = new EventEmitter<WordFilters>();
  @Output() applyAllEvent = new EventEmitter<WordFilters>();
  @Output() resetAllEvent = new EventEmitter<void>();

  updateFilters(partial: Partial<WordFilters>): void {
    this.filters = {
      ...this.filters,
      ...partial,
    };

    this.filtersChange.emit(this.filters);
  }

  applyAll(): void {
    this.applyAllEvent.emit(this.filters);
  }

  resetAll(): void {
    this.filters = {};
    this.resetAllEvent.emit();
  }
}