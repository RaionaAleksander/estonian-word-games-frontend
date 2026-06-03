import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { WordExistsResponse } from '../../../features/words/models/word-exists-response.model';

@Injectable({
  providedIn: 'root',
})
export class WordExistsApiService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'http://localhost:8080/api/v1/words/exists';

  public checkWordExists(word: string): Observable<WordExistsResponse> {

    const params = new HttpParams()
      .set('word', word);

    return this.http.get<WordExistsResponse>(
      this.apiUrl,
      { params }
    );
  }
}