import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pagination-info-panel',
  imports: [],
  templateUrl: './pagination-info-panel.component.html',
  styleUrl: './pagination-info-panel.component.css',
})
export class PaginationInfoPanelComponent {
  public readonly entityName = input.required<string>();

  public readonly totalElements = input.required<number>();

  public readonly totalPages = input.required<number>();

  public readonly currentPage = input.required<number>();

  public readonly pageSize = input.required<number>();

  public readonly pageCount = input.required<number>();
}