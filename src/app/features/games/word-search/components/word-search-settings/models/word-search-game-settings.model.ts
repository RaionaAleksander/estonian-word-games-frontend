import { LCase } from "../../../../../../shared/components/search-panel/letter-case/models/letter-case.model";
import { WordSearchDirection } from "../../../models/word-search-direction.model";

export interface WordSearchSettings {
  rows: number;
  cols: number;
  wordsCount: number;
  allowIncomplete: boolean;
  allowIntersections: boolean;
  directions: WordSearchDirection[];
  letterCase?: LCase;
}