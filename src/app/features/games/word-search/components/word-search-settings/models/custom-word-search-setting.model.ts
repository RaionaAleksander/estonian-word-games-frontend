import { LCase } from "../../../../../../shared/components/search-panel/letter-case/models/letter-case.model";
import { WordSearchDirection } from "../../../models/word-search-direction.model";

export interface CustomWordSearchSettings {
  rows: number;
  cols: number;

  words: string[];

  letterCase?: LCase;

  allowIntersections: boolean;

  directions: WordSearchDirection[];
}