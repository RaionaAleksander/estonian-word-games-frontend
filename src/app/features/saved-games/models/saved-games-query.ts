import { SavedGameSort } from './enums/saved-game-sort.enum';
import { SavedGameType } from './enums/saved-game-type.enum';

export interface SavedGamesQuery {
  gameType?: SavedGameType;
  sort?: SavedGameSort;

  page?: number;
  size?: number;
}