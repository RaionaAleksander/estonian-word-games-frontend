import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { WordQueryParams } from '../../../features/words/models/word-query-params.model';

@Injectable({
  providedIn: 'root',
})
export class WordsApiService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/v1/words';

  public getWordsPage(page: number, size: number, queryParams: WordQueryParams) {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);

    if (queryParams.minLength != null) {
      params = params.set('minLength', queryParams.minLength);
    }

    if (queryParams.maxLength != null) {
      params = params.set('maxLength', queryParams.maxLength);
    }

    if (queryParams.startsWith) {
      params = params.set('startsWith', queryParams.startsWith);
    }

    if (queryParams.endsWith) {
      params = params.set('endsWith', queryParams.endsWith);
    }

    if (queryParams.pattern) {
      params = params.set('pattern', queryParams.pattern);
    }

    if (queryParams.contains?.length) {
      params = params.set('contains', queryParams.contains.join(','));
    }

    if (queryParams.notContains?.length) {
      params = params.set('notContains', queryParams.notContains.join(','));
    }

    if (queryParams.includeCategories?.length) {
      params = params.set('includeCategories', queryParams.includeCategories.join(','));
    }

    if (queryParams.excludeCategories?.length) {
      params = params.set('excludeCategories', queryParams.excludeCategories.join(','));
    }

    if (queryParams.excludedWords?.length) {
      params = params.set('excludedWords', queryParams.excludedWords.join(','));
    }

    if (queryParams.sort) {
      params = params.set('sort', queryParams.sort);
    }

    if (queryParams.order) {
      params = params.set('order', queryParams.order);
    }

    return this.http.get<any>(this.apiUrl, { params });
  }
}