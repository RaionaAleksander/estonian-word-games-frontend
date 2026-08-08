import { WordSort } from "../../../../shared/components/search-panel/sort/models/word-sort.model";
import { CustomShapedWordSearchSettings } from "./custom-shaped-word-search-settings.model";

export interface CustomShapedWordSearchQuery {
  settings: CustomShapedWordSearchSettings;
  sort: WordSort;
}