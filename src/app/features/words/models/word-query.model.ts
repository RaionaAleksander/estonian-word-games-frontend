import { WordFilters } from '../../../shared/components/search-panel/filter/models/word-filter.model';
import { WordSort } from '../../../shared/components/search-panel/sort/models/word-sort.model';

export interface WordQuery {
  filters: WordFilters;
  sort: WordSort;

  page: number;
  size: number;
}