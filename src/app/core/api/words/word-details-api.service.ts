import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { WordDetailsResponse } from '../../../features/words/models/word-details-response.model';

@Injectable({
  providedIn: 'root',
})
export class WordDetailsApiService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/v1/words';

  public getWordDetails(lemma: string): Observable<WordDetailsResponse> {
    return this.http.get<WordDetailsResponse>(
      `${this.apiUrl}/${encodeURIComponent(lemma)}`
    );
  }
}