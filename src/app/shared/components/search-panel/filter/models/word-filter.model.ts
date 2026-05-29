export interface WordFilters {
  minLength?: number;
  maxLength?: number;

  startsWith?: string;
  endsWith?: string;
  pattern?: string;

  contains?: string[];
  notContains?: string[];

  includeCategories?: string[];
  excludeCategories?: string[];

  excludedWords?: string[];
}