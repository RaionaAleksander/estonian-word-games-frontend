import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { WordPageResponse } from '../../../features/words/models/word-page-response.model';
import { WordFilters } from '../../../features/words/models/word-filter.model';

@Injectable({
  providedIn: 'root',
})
export class WordsApiService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/v1/words';

  public getWordsPage(page: number, size: number, filters: WordFilters) {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);

    if (filters.minLength != null) {
      params = params.set('minLength', filters.minLength);
    }

    if (filters.maxLength != null) {
      params = params.set('maxLength', filters.maxLength);
    }

    if (filters.startsWith) {
      params = params.set('startsWith', filters.startsWith);
    }

    if (filters.endsWith) {
      params = params.set('endsWith', filters.endsWith);
    }

    if (filters.pattern) {
      params = params.set('pattern', filters.pattern);
    }

    if (filters.contains?.length) {
      params = params.set('contains', filters.contains.join(','));
    }

    if (filters.notContains?.length) {
      params = params.set('notContains', filters.notContains.join(','));
    }

    if (filters.includeCategories?.length) {
      params = params.set('includeCategories', filters.includeCategories.join(','));
    }

    if (filters.excludeCategories?.length) {
      params = params.set('excludeCategories', filters.excludeCategories.join(','));
    }

    if (filters.excludedWords?.length) {
      params = params.set('excludedWords', filters.excludedWords.join(','));
    }

    return this.http.get<any>(this.apiUrl, { params });
  }
}