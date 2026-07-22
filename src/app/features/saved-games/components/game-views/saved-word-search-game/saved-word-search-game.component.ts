import { Component, Input } from '@angular/core';
import { WordSearchGameComponent } from '../../../../games/word-search/components/word-search-game/word-search-game.component';
import { WordSearchInfoPanelComponent } from '../../../../games/word-search/components/word-search-info-panel/word-search-info-panel.component';
import { SavedWordSearchExportComponent } from '../../exports/saved-word-search-export/saved-word-search-export.component';
import { QueryMetaPanelComponent } from '../../../../../shared/components/query-meta/query-meta-panel/query-meta-panel.component';
import { SortMetaComponent } from '../../../../../shared/components/query-meta/sort-meta/sort-meta.component';
import { SavedWordSearchResponse } from '../../../models/responses/saved-word-search-response';
import { FilterMetaComponent } from '../../../../../shared/components/query-meta/filter-meta/filter-meta.component';

@Component({
  selector: 'app-saved-word-search-game',
  imports: [
    WordSearchGameComponent,
    WordSearchInfoPanelComponent,
    SavedWordSearchExportComponent,
    QueryMetaPanelComponent,
    SortMetaComponent, FilterMetaComponent
  ],
  templateUrl: './saved-word-search-game.component.html',
  styleUrl: './saved-word-search-game.component.css',
})
export class SavedWordSearchGameComponent {
  @Input({ required: true })
  response!: SavedWordSearchResponse;
}
