import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SavedGameSummary } from '../../models/saved-game-summary';
import { SavedGameType } from '../../models/enums/saved-game-type.enum';

@Component({
  selector: 'app-saved-games-table',
  imports: [RouterLink, DatePipe],
  templateUrl: './saved-games-table.component.html',
  styleUrl: './saved-games-table.component.css',
})
export class SavedGamesTableComponent {
  @Input({ required: true })
  games!: SavedGameSummary[];

  @Output()
  deleteGame = new EventEmitter<number>();

  protected readonly gameTypeLabels: Record<SavedGameType, string> = {
    [SavedGameType.FIND_WORD]: 'Find Word',
    [SavedGameType.WORD_SEARCH]: 'Word Search',
    [SavedGameType.CUSTOM_WORD_SEARCH]: 'Custom Word Search',
  };
}
