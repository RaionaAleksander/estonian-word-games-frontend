import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { WordFilters } from '../../models/word-filter.model';
import { FilterContainerComponent } from '../../../../shared/components/search-panel/filter/filter-container/filter-container.component';
import { PanelActionsComponent } from '../../../../shared/components/search-panel/foundation/panel-actions/panel-actions.component';
import { SearchPanelComponent } from '../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';

@Component({
  selector: 'app-word-main-panel',
  templateUrl: './word-main-panel.component.html',
  styleUrl: './word-main-panel.component.css',
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