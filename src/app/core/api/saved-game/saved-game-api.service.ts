import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SavedGameApiService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/v1/saved-games';

  public saveGame(payload: unknown): Observable<void> {
    return this.http.post<void>(
      this.apiUrl,
      payload,
    );
  }
}