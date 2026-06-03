import { WordFilters } from "../../components/search-panel/filter/models/word-filter.model";

export function buildWordsFiltersParams(filters: WordFilters): any {
  const params: any = {};

  if (filters.minLength != null) params.minLength = filters.minLength;
  if (filters.maxLength != null) params.maxLength = filters.maxLength;

  if (filters.startsWith) params.startsWith = filters.startsWith;
  if (filters.endsWith) params.endsWith = filters.endsWith;
  if (filters.pattern) params.pattern = filters.pattern;

  if (Array.isArray(filters.contains) && filters.contains.length)
    params.contains = filters.contains.join(',');

  if (Array.isArray(filters.notContains) && filters.notContains.length)
    params.notContains = filters.notContains.join(',');

  if (Array.isArray(filters.includeCategories) && filters.includeCategories.length)
    params.includeCategories = filters.includeCategories.join(',');

  if (Array.isArray(filters.excludeCategories) && filters.excludeCategories.length)
    params.excludeCategories = filters.excludeCategories.join(',');

  if (Array.isArray(filters.excludedWords) && filters.excludedWords.length)
    params.excludedWords = filters.excludedWords.join(',');

  return params;
}