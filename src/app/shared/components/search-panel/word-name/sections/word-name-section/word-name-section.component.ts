import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SectionFieldComponent } from '../../../foundation/section-field/section-field.component';
import { SectionRowComponent } from '../../../foundation/section-row/section-row.component';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { WordName } from '../../models/word-name.model';
import { WordNameSectionDirective } from '../../base/word-name.directive';

@Component({
  selector: 'app-word-name-section',
  imports: [SearchSectionComponent, SectionRowComponent, SectionFieldComponent],
  templateUrl: './word-name-section.component.html',
  styleUrl: './word-name-section.component.css',
})
export class WordNameSectionComponent 
  extends WordNameSectionDirective<WordName> {

  @Input() word: string = '';

  protected onWordChange(value: string): void {
    this.emit({
      word: value.trim(),
    });
  }
}
