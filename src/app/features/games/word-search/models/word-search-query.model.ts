import { WordFilters } from "../../../../shared/components/search-panel/filter/models/word-filter.model";
import { WordSort } from "../../../../shared/components/search-panel/sort/models/word-sort.model";
import { WordSearchSettings } from "../components/word-search-settings/models/word-search-game-settings.model";

export interface WordSearchQuery {
  settings: WordSearchSettings;
  filters: WordFilters;
  sort: WordSort;
}