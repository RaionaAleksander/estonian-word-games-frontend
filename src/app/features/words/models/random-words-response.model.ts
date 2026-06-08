import { WordQueryMeta } from "./word-query-meta.model";
import { Word } from "./word.model";

export interface RandomWordsResponse {
  count: number;
  words: Word[];
  meta: WordQueryMeta;
  generatedAt: string;
}