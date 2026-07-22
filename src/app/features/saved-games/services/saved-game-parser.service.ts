import { Injectable } from "@angular/core";
import { SavedGameResponse } from "../models/responses/saved-game-response";
import { SavedGameType } from "../models/enums/saved-game-type.enum";
import { SavedWordSearchResponse } from "../models/responses/saved-word-search-response";

@Injectable({
  providedIn: 'root'
})
export class SavedGameParserService {
  public parse(data: string): SavedGameResponse {
    const json = JSON.parse(data);

    switch (json.gameType) {
      case SavedGameType.WORD_SEARCH:
      case SavedGameType.CUSTOM_WORD_SEARCH:
        return json as SavedWordSearchResponse;
      default:
        throw new Error(
          `Unknown game type ${json.gameType}`
        );
    }
  }
}