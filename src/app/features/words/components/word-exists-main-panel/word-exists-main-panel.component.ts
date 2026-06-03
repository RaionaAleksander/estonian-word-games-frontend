import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WordName } from '../../../../shared/components/search-panel/word-name/models/word-name.model';
import { WordNameSectionComponent } from '../../../../shared/components/search-panel/word-name/sections/word-name-section/word-name-section.component';
import { SearchPanelComponent } from '../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';

@Component({
  selector: 'app-word-exists-main-panel',
  imports: [SearchPanelComponent, WordNameSectionComponent],
  templateUrl: './word-exists-main-panel.component.html',
  styleUrl: './word-exists-main-panel.component.css',
})
export class WordExistsMainPanelComponent {
  @Input() word: WordName = { word: '' };

  @Output() wordChange = new EventEmitter<WordName>();

  protected checkWord(
    partial: Partial<WordName>
  ): void {

    this.word = {
      ...this.word,
      ...partial,
    };

    this.wordChange.emit(this.word);
  }
}
