export interface WordSort {
  sort?: WordSortField;
  order?: SortOrder;
}

export type WordSortField = 'LENGTH' | 'ALPHABET';

export type SortOrder = 'ASC' | 'DESC';