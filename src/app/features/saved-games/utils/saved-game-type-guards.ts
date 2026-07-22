import { SavedGameType } from "../models/enums/saved-game-type.enum";
import { SavedGameResponse } from "../models/responses/saved-game-response";
import { SavedWordSearchResponse } from "../models/responses/saved-word-search-response";

export function isSavedWordSearch(game: SavedGameResponse): game is SavedWordSearchResponse {
  return (
    game.gameType === SavedGameType.WORD_SEARCH ||
    game.gameType === SavedGameType.CUSTOM_WORD_SEARCH
  );
}