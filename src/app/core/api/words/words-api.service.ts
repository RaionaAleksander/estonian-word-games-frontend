import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { WordPageResponse } from '../../../features/words/models/word-page-response.model';

@Injectable({
  providedIn: 'root',
})
export class WordsApiService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/v1/words';

  public getWordsPage(page: number, size: number): Observable<WordPageResponse> {
    return this.http.get<WordPageResponse>(`${this.apiUrl}`, {
      params: {
        page: page,
        size: size,
      },
    });
  }
}