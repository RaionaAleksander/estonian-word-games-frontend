import { DatePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { CollapsibleHeaderComponent } from '../../search-panel/foundation/collapsible-header/collapsible-header.component';
import { ExpandableContainerDirective } from '../../search-panel/foundation/directives/expandable-container.directive';

@Component({
  selector: 'app-query-meta-panel',
  imports: [DatePipe, CollapsibleHeaderComponent],
  templateUrl: './query-meta-panel.component.html',
  styleUrl: './query-meta-panel.component.css',
})
export class QueryMetaPanelComponent extends ExpandableContainerDirective {
  public readonly generatedAt = input<string | null>(null);
}
