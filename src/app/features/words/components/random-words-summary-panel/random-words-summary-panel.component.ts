import { Component, input } from '@angular/core';

@Component({
  selector: 'app-random-words-summary-panel',
  imports: [],
  templateUrl: './random-words-summary-panel.component.html',
  styleUrl: './random-words-summary-panel.component.css',
})
export class RandomWordsSummaryPanelComponent {
  public readonly count = input.required<number>();
  public readonly limit = input.required<number>();
}
