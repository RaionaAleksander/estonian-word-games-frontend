import { Component, Input } from '@angular/core';
import { BasePaginationSectionDirective } from '../../base/base-pagination-section.directive';
import { PageSize } from '../../models/page-size.model';
import { SearchSectionComponent } from '../../../foundation/search-section/search-section.component';
import { SectionRowComponent } from '../../../foundation/section-row/section-row.component';
import { SectionFieldComponent } from '../../../foundation/section-field/section-field.component';

@Component({
  selector: 'app-page-size-section',
  imports: [SearchSectionComponent, SectionRowComponent, SectionFieldComponent],
  templateUrl: './page-size-section.component.html',
  styleUrl: './page-size-section.component.css',
})
export class PageSizeSectionComponent
  extends BasePaginationSectionDirective<PageSize> {

  @Input() size: number = 20;

  protected onSizeChange(value: string): void {
    const parsed = value ? Number(value) : 20;

    this.emit({
      size: Number.isNaN(parsed) ? 20 : parsed,
    });
  }
}