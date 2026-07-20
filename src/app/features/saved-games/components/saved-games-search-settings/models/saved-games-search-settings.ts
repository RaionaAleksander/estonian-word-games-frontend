import { SavedGameSort } from "../../../models/enums/saved-game-sort.enum";
import { SavedGameType } from "../../../models/enums/saved-game-type.enum";

export interface SavedGamesSearchSettings {
  gameType?: SavedGameType;
  sort?: SavedGameSort;
}