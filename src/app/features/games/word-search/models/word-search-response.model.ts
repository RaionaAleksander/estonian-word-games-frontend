import { WordFilters } from '../../../../shared/components/search-panel/filter/models/word-filter.model';
import { WordSearchPlacement } from './word-search-placement.model';

export interface WordSearchResponse {
  gameType: string;

  rows: number;
  cols: number;

  grid: string[];

  words: string[];

  placements: WordSearchPlacement[];

  filters: WordFilters;

  generatedAt: string;

  warning: string | null;
}