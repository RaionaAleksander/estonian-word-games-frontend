import { Component, Input } from '@angular/core';
import { LetterCaseSectionDirective } from '../../base/letter-case.directive';
import { LCase, LetterCase } from '../../models/letter-case.model';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { SectionRowComponent } from '../../../foundation/section-row/section-row.component';
import { SectionFieldComponent } from '../../../foundation/section-field/section-field.component';

@Component({
  selector: 'app-letter-case-section',
  imports: [
    SearchSectionComponent,
    SectionRowComponent,
    SectionFieldComponent
  ],
  templateUrl: './letter-case-section.component.html',
  styleUrl: './letter-case-section.component.css',
})
export class LetterCaseSectionComponent extends LetterCaseSectionDirective<LetterCase> {
  @Input() letterCase?: LCase;

  protected onLetterCaseChange(value: string): void {
    this.emit({
      letterCase: (value as LCase) || undefined,
    });
  }
}
