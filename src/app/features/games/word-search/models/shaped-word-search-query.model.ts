import { WordFilters } from "../../../../shared/components/search-panel/filter/models/word-filter.model";
import { WordSort } from "../../../../shared/components/search-panel/sort/models/word-sort.model";
import { ShapedWordSearchSettings } from "./shaped-word-search-settings.model";

export interface ShapedWordSearchQuery {
  settings: ShapedWordSearchSettings;
  filters: WordFilters;
  sort: WordSort;
}