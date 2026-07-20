import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { SearchPanelComponent } from '../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';
import { SavedGamesSettingsContainerComponent } from '../saved-games-search-settings/saved-games-settings-container/saved-games-settings-container.component';
import { PanelActionsComponent } from '../../../../shared/components/search-panel/foundation/panel-actions/panel-actions.component';
import { PaginationContainerComponent } from '../../../../shared/components/search-panel/pagination/pagination-container/pagination-container.component';
import { SavedGamesSearchSettings } from '../saved-games-search-settings/models/saved-games-search-settings';

@Component({
  selector: 'app-saved-games-main-panel',
  imports: [
    SearchPanelComponent,
    SavedGamesSettingsContainerComponent,
    PaginationContainerComponent,
    PanelActionsComponent,
  ],
  templateUrl: './saved-games-main-panel.component.html',
  styleUrl: './saved-games-main-panel.component.css',
})
export class SavedGamesMainPanelComponent {

  @Input({ required: true })
  settings!: SavedGamesSearchSettings;

  @Input({ required: true })
  pageSize!: { size: number };

  @Output()
  applyAllEvent = new EventEmitter<{
    settings: SavedGamesSearchSettings;
    size: number;
  }>();

  @Output()
  resetAllEvent = new EventEmitter<void>();

  protected draftSettings: SavedGamesSearchSettings = {};

  protected currentPageSize = 10;

  public ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['settings'] &&
      changes['settings'].firstChange
    ) {
      this.draftSettings = {
        ...this.settings,
      };
    }

    if (
      changes['pageSize'] &&
      changes['pageSize'].firstChange
    ) {
      this.currentPageSize = this.pageSize.size;
    }
  }

  protected updateSettings(settings: Partial<SavedGamesSearchSettings>
  ): void {
    console.log('MAIN PANEL RECEIVED', settings);
    this.draftSettings = {
      ...this.draftSettings,
      ...settings,
    };
    console.log('CURRENT SETTINGS', this.draftSettings);
  }

  protected updatePageSize(pageSize: { size: number }): void {
    this.currentPageSize = pageSize.size;
  }

  protected applyAll(): void {
    this.applyAllEvent.emit({
      settings: this.draftSettings,
      size: this.currentPageSize,
    });
  }

  protected resetAll(): void {
    this.draftSettings = {};
    this.currentPageSize = 10;

    this.resetAllEvent.emit();
  }
}