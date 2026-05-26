import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-panel-actions',
  imports: [],
  templateUrl: './panel-actions.html',
  styleUrl: './panel-actions.css',
})
export class PanelActionsComponent {

  public readonly primaryLabel = input.required<string>();

  public readonly secondaryLabel = input.required<string>();

  @Output()
  public readonly primaryClick = new EventEmitter<void>();

  @Output()
  public readonly secondaryClick = new EventEmitter<void>();

}