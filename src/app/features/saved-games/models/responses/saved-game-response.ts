import { SavedGameType } from "../enums/saved-game-type.enum";

export interface SavedGameResponse {
  gameType: SavedGameType;
  generatedAt: string;
}