import { LCase } from "../../../../shared/components/search-panel/letter-case/models/letter-case.model";
import { CellCoordinate } from "./cell-coordinate.model";
import { WordSearchDirection } from "./word-search-direction.model";

export interface ShapedWordSearchSettings {
  rows: number;
  cols: number;
  wordsCount: number;
  allowIncomplete: boolean;

  letterCase?: LCase;

  allowIntersections: boolean;

  directions: WordSearchDirection[];

  blockedCells: CellCoordinate[];
}