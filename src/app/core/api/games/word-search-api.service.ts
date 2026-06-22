import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { WordSearchQuery } from "../../../features/games/word-search/models/word-search-query.model";
import { Observable } from "rxjs";
import { WordSearchResponse } from "../../../features/games/word-search/models/word-search-response.model";

@Injectable({
  providedIn: 'root',
})
export class WordSearchApiService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'http://localhost:8080/api/v1/games/word-search';

  public generateGame(
    query: WordSearchQuery
  ): Observable<WordSearchResponse> {

    const params = {
      rows: query.rows,
      cols: query.cols,
      wordsCount: query.wordsCount,
      allowIncomplete: query.allowIncomplete,
      ...query.filters,
    };

    return this.http.get<WordSearchResponse>(
      `${this.apiUrl}/generate`,
      { params: params as any }
    );
  }
}