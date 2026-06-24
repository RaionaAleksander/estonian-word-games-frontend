import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-search-grid',
  imports: [],
  templateUrl: './word-search-grid.component.html',
  styleUrl: './word-search-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchGridComponent {

  @Input({ required: true }) 
  rows!: string[][];

  @Input({ required: true }) 
  cols!: number;
}