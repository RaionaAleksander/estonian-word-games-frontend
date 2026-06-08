import { WordQueryMeta } from './word-query-meta.model';
import { Word } from './word.model';

export interface WordPageResponse {
  totalElements: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  count: number;
  words: Word[];
  meta: WordQueryMeta;
  generatedAt: string;
}