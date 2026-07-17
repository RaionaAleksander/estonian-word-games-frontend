import { SavedGameType } from './enums/saved-game-type.enum';

export interface SavedGameSummary {
  id: number;

  gameType: SavedGameType;

  createdAt: string;
}