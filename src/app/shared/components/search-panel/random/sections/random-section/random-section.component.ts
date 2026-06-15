import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseLimitSectionDirective } from '../../../limit/base/base-limit.directive';
import { WordRandom } from '../../models/word-random.model';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { SectionRowComponent } from '../../../foundation/section-row/section-row.component';
import { SectionFieldComponent } from '../../../foundation/section-field/section-field.component';

@Component({
  selector: 'app-random-section',
  imports: [SearchSectionComponent, SectionRowComponent, SectionFieldComponent],
  templateUrl: './random-section.component.html',
  styleUrl: './random-section.component.css',
})
export class RandomSectionComponent extends BaseLimitSectionDirective<WordRandom> {

  @Input() random: boolean = false;

  protected onRandomChange(value: boolean): void {
    this.emit({
      random: value,
    });
  }
}