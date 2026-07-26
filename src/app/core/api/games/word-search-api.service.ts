import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { WordSearchQuery } from "../../../features/games/word-search/models/word-search-query.model";
import { Observable } from "rxjs";
import { WordSearchResponse } from "../../../features/games/word-search/models/word-search-response.model";
import { CustomWordSearchQuery } from "../../../features/games/word-search/models/custom-word-search-query.model";
import { WordSearchDirection } from "../../../features/games/word-search/models/word-search-direction.model";
import { WordSort } from "../../../shared/components/search-panel/sort/models/word-sort.model";

@Injectable({
  providedIn: 'root',
})
export class WordSearchApiService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/v1/games/word-search';
  private readonly apiUrlCustom = 'http://localhost:8080/api/v1/games/custom-word-search';

  public generateGame(query: WordSearchQuery): Observable<WordSearchResponse> {
    let params = new HttpParams()
      .set('rows', query.settings.rows)
      .set('cols', query.settings.cols)
      .set('wordsCount', query.settings.wordsCount)
      .set('allowIncomplete', query.settings.allowIncomplete)
      .set('allowIntersections', query.settings.allowIntersections);

    if (query.settings.letterCase) {
      params = params.set('letterCase', query.settings.letterCase);
    }

    params = this.appendDirections(params, query.settings.directions);

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

    params = this.appendSort(params, query.sort);

    return this.http.get<WordSearchResponse>(
      `${this.apiUrl}/generate`,
      { params }
    );
  }

  public generateCustomGame(query: CustomWordSearchQuery): Observable<WordSearchResponse> {
    let params = new HttpParams()
      .set('rows', query.settings.rows)
      .set('cols', query.settings.cols)
      .set('allowIntersections', query.settings.allowIntersections)
      .set('alphabet', query.settings.fillAlphabet);;

    if (query.settings.letterCase) {
      params = params.set('letterCase', query.settings.letterCase);
    }

    for (const word of query.settings.words) {
      params = params.append('words', word);
    }

    params = this.appendDirections(params, query.settings.directions);
    params = this.appendSort(params, query.sort);

    return this.http.get<WordSearchResponse>(
      `${this.apiUrlCustom}/generate`,
      { params }
    );
  }

  private appendDirections(params: HttpParams, directions: WordSearchDirection[]): HttpParams {
    for (const direction of directions) {
      params = params.append('directions', direction);
    }
    return params;
  }

  private appendSort(params: HttpParams, sort: WordSort): HttpParams {
    if (sort.sort) {
      params = params.set('sort', sort.sort);
    }

    if (sort.order) {
      params = params.set('order', sort.order);
    }

    return params;
  }
}