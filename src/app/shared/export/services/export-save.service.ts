import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SavedGameApiService } from "../../../core/api/saved-game/saved-game-api.service";

@Injectable({
  providedIn: 'root',
})
export class ExportSaveService {

  private readonly api = inject(SavedGameApiService);

  public save<T>(data: T): Observable<void> {
    return this.api.saveGame(data);
  }
}