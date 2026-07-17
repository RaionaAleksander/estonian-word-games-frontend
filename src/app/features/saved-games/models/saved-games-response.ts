import { SavedGameSummary } from './saved-game-summary';

export interface SavedGamesResponse {
  totalElements: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  count: number;
  games: SavedGameSummary[];
  generatedAt: string;
}