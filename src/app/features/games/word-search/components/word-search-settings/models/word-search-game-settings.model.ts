import { LCase } from "../../../../../../shared/components/search-panel/letter-case/models/letter-case.model";

export interface WordSearchSettings {
  rows: number;
  cols: number;
  wordsCount: number;
  allowIncomplete: boolean;
  letterCase?: LCase;
}