import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CollapsibleHeaderComponent } from '../../../../../../shared/components/search-panel/foundation/collapsible-header/collapsible-header.component';
import { LetterCaseSectionComponent } from '../../../../../../shared/components/search-panel/letter-case/sections/letter-case-section/letter-case-section.component';
import { FillAlphabetSectionComponent } from '../sections/fill-alphabet-section/fill-alphabet-section.component';
import { AllowIntersectionsSectionComponent } from '../sections/allow-intersections-section/allow-intersections-section.component';
import { DirectionsSectionComponent } from '../sections/directions-section/directions-section.component';
import { ExpandableContainerDirective } from '../../../../../../shared/components/search-panel/foundation/directives/expandable-container.directive';
import { CustomShapedWordSearchSettings } from '../../../models/custom-shaped-word-search-settings.model';

@Component({
  selector: 'app-custom-shaped-word-search-settings-container',
  imports: [
    CollapsibleHeaderComponent,
    LetterCaseSectionComponent,
    FillAlphabetSectionComponent,
    AllowIntersectionsSectionComponent,
    DirectionsSectionComponent,
  ],
  templateUrl: './custom-shaped-ws-settings-container.component.html',
  styleUrl: './custom-shaped-ws-settings-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomShapedWordSearchSettingsContainerComponent extends ExpandableContainerDirective {

  @Input({ required: true }) settings!: CustomShapedWordSearchSettings;

  @Output() settingsChange = new EventEmitter<CustomShapedWordSearchSettings>();

  protected updateSettings(
    partial: Partial<CustomShapedWordSearchSettings>,
  ): void {
    this.settingsChange.emit({
      ...this.settings,
      ...partial,
    });
  }
}