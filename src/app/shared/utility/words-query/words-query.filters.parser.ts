import { WordFilters } from '../../components/search-panel/filter/models/word-filter.model';

export function parseWordFiltersFromQuery(params: any): WordFilters {
  return {
    minLength: params['minLength'] ? Number(params['minLength']) : undefined,
    maxLength: params['maxLength'] ? Number(params['maxLength']) : undefined,

    startsWith: params['startsWith'] || undefined,
    endsWith: params['endsWith'] || undefined,
    pattern: params['pattern'] || undefined,

    contains: params['contains']
      ? params['contains'].split(',').filter(Boolean)
      : undefined,

    notContains: params['notContains']
      ? params['notContains'].split(',').filter(Boolean)
      : undefined,

    includeCategories: params['includeCategories']
      ? params['includeCategories'].split(',').filter(Boolean)
      : undefined,

    excludeCategories: params['excludeCategories']
      ? params['excludeCategories'].split(',').filter(Boolean)
      : undefined,

    excludedWords: params['excludedWords']
      ? params['excludedWords'].split(',').filter(Boolean)
      : undefined,
  };
}