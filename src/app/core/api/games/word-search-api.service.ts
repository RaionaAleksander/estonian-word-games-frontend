import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { WordSearchQuery } from "../../../features/games/word-search/models/word-search-query.model";
import { Observable } from "rxjs";
import { WordSearchResponse } from "../../../features/games/word-search/models/word-search-response.model";

@Injectable({
  providedIn: 'root',
})
export class WordSearchApiService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/v1/games/word-search';

  public generateGame(query: WordSearchQuery): Observable<WordSearchResponse> {
    let params = new HttpParams()
      .set('rows', query.settings.rows)
      .set('cols', query.settings.cols)
      .set('wordsCount', query.settings.wordsCount)
      .set('allowIncomplete', query.settings.allowIncomplete);

    const filters = query.filters;

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

    if (query.sort.sort) {
      params = params.set('sort', query.sort.sort);
    }

    if (query.sort.order) {
      params = params.set('order', query.sort.order);
    }

    return this.http.get<WordSearchResponse>(
      `${this.apiUrl}/generate`,
      { params }
    );
  }
}