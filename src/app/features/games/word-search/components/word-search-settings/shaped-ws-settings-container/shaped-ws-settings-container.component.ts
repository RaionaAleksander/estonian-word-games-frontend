import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CollapsibleHeaderComponent } from '../../../../../../shared/components/search-panel/foundation/collapsible-header/collapsible-header.component';
import { WordsCountSectionComponent } from '../sections/words-count-section/words-count-section.component';
import { AllowIncompleteSectionComponent } from '../sections/allow-incomplete-section/allow-incomplete-section.component';
import { LetterCaseSectionComponent } from '../../../../../../shared/components/search-panel/letter-case/sections/letter-case-section/letter-case-section.component';
import { AllowIntersectionsSectionComponent } from '../sections/allow-intersections-section/allow-intersections-section.component';
import { DirectionsSectionComponent } from '../sections/directions-section/directions-section.component';
import { ExpandableContainerDirective } from '../../../../../../shared/components/search-panel/foundation/directives/expandable-container.directive';
import { ShapedWordSearchSettings } from '../../../models/shaped-word-search-settings.model';

@Component({
  selector: 'app-shaped-ws-settings-container',
  imports: [
    CollapsibleHeaderComponent,
    WordsCountSectionComponent,
    AllowIncompleteSectionComponent,
    LetterCaseSectionComponent,
    AllowIntersectionsSectionComponent,
    DirectionsSectionComponent,
  ],
  templateUrl: './shaped-ws-settings-container.component.html',
  styleUrl: './shaped-ws-settings-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapedWordSearchSettingsContainerComponent extends ExpandableContainerDirective {

  @Input() settings!: ShapedWordSearchSettings;

  @Output() settingsChange = new EventEmitter<ShapedWordSearchSettings>();

  protected updateSettings(
    partial: Partial<ShapedWordSearchSettings>,
  ): void {
    this.settingsChange.emit({
      ...this.settings,
      ...partial,
    });
  }
}