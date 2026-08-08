import { LCase } from "../../../../shared/components/search-panel/letter-case/models/letter-case.model";
import { CellCoordinate } from "./cell-coordinate.model";
import { FillAlphabet } from "./fill-alphabet.model";
import { WordSearchDirection } from "./word-search-direction.model";

export interface CustomShapedWordSearchSettings {
  rows: number;
  cols: number;

  words: string[];

  letterCase?: LCase;

  allowIntersections: boolean;

  directions: WordSearchDirection[];

  fillAlphabet: FillAlphabet;

  blockedCells: CellCoordinate[];
}