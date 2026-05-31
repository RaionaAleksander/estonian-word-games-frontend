import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-words-random-page',
  imports: [],
  templateUrl: './words-random-page.component.html',
  styleUrl: './words-random-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsRandomPageComponent {}
