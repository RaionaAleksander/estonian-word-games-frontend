import { Component, input } from '@angular/core';

@Component({
  selector: 'app-word-info-panel',
  imports: [],
  templateUrl: './word-info-panel.component.html',
  styleUrl: './word-info-panel.component.css',
})
export class WordInfoPanelComponent {
  public readonly totalElements = input.required<number>();

  public readonly totalPages = input.required<number>();

  public readonly currentPage = input.required<number>();

  public readonly pageSize = input.required<number>();

  public readonly pageCount = input.required<number>();
}