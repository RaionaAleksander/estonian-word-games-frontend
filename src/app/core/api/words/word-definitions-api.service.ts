import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WordDefinitionsResponse } from "../../../features/words/models/word-definitions-response.model";

@Injectable({
  providedIn: 'root',
})
export class WordDefinitionsApiService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'http://localhost:8080/api/v1/words/definitions';

  public getWordDefinitions(
    word: string,
    limit?: number,
    random: boolean = false
  ): Observable<WordDefinitionsResponse> {

    let params = new HttpParams().set('word', word);

    if (limit != null) {
      params = params.set('limit', limit);
    }

    params = params.set('random', random);

    return this.http.get<WordDefinitionsResponse>(
      this.apiUrl,
      { params }
    );
  }
}