import { WordSort } from "../../../../shared/components/search-panel/sort/models/word-sort.model";
import { CustomWordSearchSettings } from "../components/word-search-settings/models/custom-word-search-setting.model";

export interface CustomWordSearchQuery {
  settings: CustomWordSearchSettings;
  sort: WordSort;
}