import { WordFilters } from "../../../../shared/components/search-panel/filter/models/word-filter.model";

export interface WordSearchQuery {
  rows: number;
  cols: number;
  wordsCount: number;
  allowIncomplete: boolean;
  filters: WordFilters;
}