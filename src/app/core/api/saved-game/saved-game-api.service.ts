import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SavedGamesResponse } from '../../../features/saved-games/models/saved-games-response';
import { SavedGamesQuery } from '../../../features/saved-games/models/saved-games-query';

@Injectable({
  providedIn: 'root',
})
export class SavedGameApiService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/v1/saved-games';

  public getSavedGames(query: SavedGamesQuery): Observable<SavedGamesResponse> {
    let params = new HttpParams();

    if (query.gameType) {
      params = params.set('gameType', query.gameType);
    }

    if (query.sort) {
      params = params.set('sort', query.sort);
    }

    if (query.page != null) {
      params = params.set('page', query.page);
    }

    if (query.size != null) {
      params = params.set('size', query.size);
    }

    return this.http.get<SavedGamesResponse>(
      this.apiUrl,
      { params }
    );
  }

  public getSavedGame(id: number): Observable<string> {
    return this.http.get(
      `${this.apiUrl}/${id}`,
      {
        responseType: 'text',
      }
    );
  }

  public saveGame<T>(payload: T): Observable<void> {
    return this.http.post<void>(
      this.apiUrl,
      payload,
    );
  }

  public deleteSavedGame(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`,
    );
  }

  public deleteAllSavedGames(): Observable<void> {
    return this.http.delete<void>(
      this.apiUrl,
    );
  }
}