import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DirectionsSectionComponent } from '../sections/directions-section/directions-section.component';
import { AllowIntersectionsSectionComponent } from '../sections/allow-intersections-section/allow-intersections-section.component';
import { LetterCaseSectionComponent } from '../../../../../../shared/components/search-panel/letter-case/sections/letter-case-section/letter-case-section.component';
import { GridSizeSectionComponent } from '../sections/grid-size-section/grid-size-section.component';
import { CollapsibleHeaderComponent } from '../../../../../../shared/components/search-panel/foundation/collapsible-header/collapsible-header.component';
import { CustomWordSearchSettings } from '../models/custom-word-search-setting.model';
import { ExpandableContainerDirective } from '../../../../../../shared/components/search-panel/foundation/directives/expandable-container.directive';

@Component({
  selector: 'app-custom-word-search-settings-container',
  imports: [
    CollapsibleHeaderComponent,
    GridSizeSectionComponent,
    LetterCaseSectionComponent,
    AllowIntersectionsSectionComponent,
    DirectionsSectionComponent,
  ],
  templateUrl: './custom-word-search-settings-container.component.html',
  styleUrl: './custom-word-search-settings-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomWordSearchSettingsContainerComponent extends ExpandableContainerDirective {

  @Input({ required: true })
  settings!: CustomWordSearchSettings;

  @Output()
  settingsChange = new EventEmitter<CustomWordSearchSettings>();

  protected updateSettings(
    partial: Partial<CustomWordSearchSettings>,
  ): void {
    this.settingsChange.emit({
      ...this.settings,
      ...partial,
    });
  }
}