import { WordSearchMeta } from './word-search-meta.model';
import { WordSearchPlacement } from './word-search-placement.model';

export interface WordSearchResponse {
  gameType: string;

  rows: number;
  cols: number;

  grid: string[];

  words: string[];

  placements: WordSearchPlacement[];

  meta: WordSearchMeta;

  generatedAt: string;

  warning: string | null;
}