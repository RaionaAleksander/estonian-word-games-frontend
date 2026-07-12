import { WordSearchDirection } from "./word-search-direction.model";

export interface WordSearchPlacement {
  word: string;
  row: number;
  col: number;
  direction: WordSearchDirection;
}