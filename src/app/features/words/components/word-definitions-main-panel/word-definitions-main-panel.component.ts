import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WordLimit } from '../../../../shared/components/search-panel/limit/models/limit.model';
import { WordRandom } from '../../../../shared/components/search-panel/random/models/word-random.model';
import { LimitContainerComponent } from '../../../../shared/components/search-panel/limit/limit-container/limit-container.component';
import { RandomContainerComponent } from '../../../../shared/components/search-panel/random/random-container/random-container.component';
import { WordNameSectionComponent } from '../../../../shared/components/search-panel/word-name/sections/word-name-section/word-name-section.component';
import { SearchPanelComponent } from '../../../../shared/components/search-panel/foundation/search-panel/search-panel.component';
import { PanelActionsComponent } from '../../../../shared/components/search-panel/foundation/panel-actions/panel-actions.component';
import { WordName } from '../../../../shared/components/search-panel/word-name/models/word-name.model';

@Component({
  selector: 'app-word-definitions-main-panel',
  imports: [ 
    LimitContainerComponent,
    RandomContainerComponent,
    WordNameSectionComponent,
    SearchPanelComponent,
    PanelActionsComponent,
  ],
  templateUrl: './word-definitions-main-panel.component.html',
  styleUrl: './word-definitions-main-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordDefinitionsMainPanelComponent {

  @Input() word: WordName = { word: '' };
  @Input() limit: WordLimit = { limit: 10 };
  @Input() random: WordRandom = { random: false };

  @Output() wordChange = new EventEmitter<WordName>();
  @Output() limitChange = new EventEmitter<WordLimit>();
  @Output() randomChange = new EventEmitter<WordRandom>();

  @Output() applyAllEvent = new EventEmitter<{
    word: WordName;
    limit: number;
    random: boolean;
  }>();

  @Output() resetAllEvent = new EventEmitter<void>();

  updateWord(partial: Partial<WordName>): void {
    this.word = { ...this.word, ...partial };
    this.wordChange.emit(this.word);
  }

  updateLimit(partial: Partial<WordLimit>): void {
    this.limit = { ...this.limit, ...partial };
    this.limitChange.emit(this.limit);
  }

  updateRandom(partial: Partial<WordRandom>): void {
    this.random = { ...this.random, ...partial };
    this.randomChange.emit(this.random);
  }

  applyAll(): void {
    this.applyAllEvent.emit({
      word: this.word,
      limit: this.limit.limit,
      random: this.random.random,
    });
  }

  resetAll(): void {
    this.word = { word: '' };
    this.limit = { limit: 10 };
    this.random = { random: false };

    this.resetAllEvent.emit();
  }
}
