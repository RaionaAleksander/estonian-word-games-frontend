import { Word } from './word.model';

export interface WordPageResponse {
  totalElements: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  count: number;
  words: Word[];
  generatedAt: string;
}