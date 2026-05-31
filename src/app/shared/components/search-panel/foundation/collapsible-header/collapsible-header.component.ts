import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-collapsible-header',
  imports: [],
  templateUrl: './collapsible-header.component.html',
  styleUrl: './collapsible-header.component.css',
})
export class CollapsibleHeaderComponent {
  public readonly title = input.required<string>();

  @Input()
  isExpanded = false;

  @Input()
  noMargin = false;

  @Output()
  expandedChange = new EventEmitter<void>();
}
