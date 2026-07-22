import { Component, Input } from '@angular/core';
import { SavedGameType } from '../../models/enums/saved-game-type.enum';
import { SavedWordSearchGameComponent } from '../game-views/saved-word-search-game/saved-word-search-game.component';
import { SavedGameResponse } from '../../models/responses/saved-game-response';
import { isSavedWordSearch } from '../../utils/saved-game-type-guards';

@Component({
  selector: 'app-saved-game-view',
  imports: [SavedWordSearchGameComponent],
  templateUrl: './saved-game-view.component.html',
  styleUrl: './saved-game-view.component.css',
})
export class SavedGameViewComponent {
  @Input({ required: true })
  response!: SavedGameResponse;

  protected readonly SavedGameType = SavedGameType;

  protected isSavedWordSearch = isSavedWordSearch;
}