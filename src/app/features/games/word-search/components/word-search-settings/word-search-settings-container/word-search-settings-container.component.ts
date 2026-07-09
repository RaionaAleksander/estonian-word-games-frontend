import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WordsCountSectionComponent } from '../sections/words-count-section/words-count-section.component';
import { AllowIncompleteSectionComponent } from '../sections/allow-incomplete-section/allow-incomplete-section.component';
import { LetterCaseSectionComponent } from '../../../../../../shared/components/search-panel/letter-case/sections/letter-case-section/letter-case-section.component';
import { CollapsibleHeaderComponent } from '../../../../../../shared/components/search-panel/foundation/collapsible-header/collapsible-header.component';
import { GridSizeSectionComponent } from '../sections/grid-size-section/grid-size-section.component';
import { ExpandableContainerDirective } from '../../../../../../shared/components/search-panel/foundation/directives/expandable-container.directive';
import { WordSearchSettings } from '../models/word-search-game-settings.model';
import { AllowIntersectionsSectionComponent } from '../sections/allow-intersections-section/allow-intersections-section.component';
import { DirectionsSectionComponent } from '../sections/directions-section/directions-section.component';

@Component({
  selector: 'app-word-search-settings-container',
  imports: [CollapsibleHeaderComponent, AllowIncompleteSectionComponent, WordsCountSectionComponent, 
    GridSizeSectionComponent, LetterCaseSectionComponent, AllowIntersectionsSectionComponent, DirectionsSectionComponent],
  templateUrl: './word-search-settings-container.component.html',
  styleUrl: './word-search-settings-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchSettingsContainerComponent extends ExpandableContainerDirective {

  @Input() settings!: WordSearchSettings;

  @Output() settingsChange = new EventEmitter<WordSearchSettings>();

  protected updateSettings(partial: Partial<WordSearchSettings>): void {
    this.settingsChange.emit({
      ...this.settings,
      ...partial,
    });
  }
}