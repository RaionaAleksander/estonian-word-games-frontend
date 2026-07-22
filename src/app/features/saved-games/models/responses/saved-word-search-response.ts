import { WordSearchResponse } from "../../../games/word-search/models/word-search-response.model";
import { SavedGameResponse } from "./saved-game-response";

export type SavedWordSearchResponse =
  SavedGameResponse &
  Omit<
    WordSearchResponse,
    'gameType' | 'generatedAt'
  >;