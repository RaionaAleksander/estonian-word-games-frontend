import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-state',
  imports: [],
  templateUrl: './loading-state.component.html',
  styleUrl: './loading-state.component.css',
})
export class LoadingStateComponent {
  @Input()
  message = 'Loading...';
}
