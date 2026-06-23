import { WordFilters } from "../../../../shared/components/search-panel/filter/models/word-filter.model";
import { WordSearchSettings } from "../components/game-settings/models/word-search-game-settings.model";

export interface WordSearchQuery {
  settings: WordSearchSettings;
  filters: WordFilters;
}