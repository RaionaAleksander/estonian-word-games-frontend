import { Component, Input } from '@angular/core';
import { BaseLimitSectionDirective } from '../../base/base-limit.directive';
import { WordLimit } from '../../models/limit.model';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { SectionRowComponent } from '../../../foundation/section-row/section-row.component';
import { SectionFieldComponent } from '../../../foundation/section-field/section-field.component';

@Component({
  selector: 'app-limit-section',
  imports: [SearchSectionComponent, SectionRowComponent, SectionFieldComponent],
  templateUrl: './limit-section.component.html',
  styleUrl: './limit-section.component.css',
})
export class LimitSectionComponent
  extends BaseLimitSectionDirective<WordLimit> {

  @Input() limit: number = 20;

  protected onLimitChange(value: string): void {
    const parsed = value ? Number(value) : 20;

    this.emit({
      limit: Number.isNaN(parsed) ? 20 : parsed,
    });
  }
}
