import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-grid',
  imports: [],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardGridComponent {}
