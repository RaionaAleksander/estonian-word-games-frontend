import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-saved-games-actions-panel',
  imports: [],
  templateUrl: './saved-games-actions-panel.component.html',
  styleUrl: './saved-games-actions-panel.component.css',
})
export class SavedGamesActionsPanelComponent {
  @Output()
  deleteAllGames = new EventEmitter<void>();

  protected deleteAll(): void {
    this.deleteAllGames.emit();
  }
}