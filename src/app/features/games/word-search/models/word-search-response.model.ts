import { WordSearchDirection } from './word-search-direction.model';
import { WordSearchMeta } from './word-search-meta.model';
import { WordSearchPlacement } from './word-search-placement.model';

export interface WordSearchResponse {
  gameType: string;

  rows: number;
  cols: number;

  letterCase: string;

  allowIntersections: boolean;

  usedDirections: WordSearchDirection[];

  grid: string[];

  words: string[];

  placements: WordSearchPlacement[];

  meta: WordSearchMeta;

  generatedAt: string;

  warning: string | null;
}