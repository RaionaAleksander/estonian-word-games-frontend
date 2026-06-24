import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-search-words',
  imports: [],
  templateUrl: './word-search-words.component.html',
  styleUrl: './word-search-words.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchWordsComponent {

  @Input({ required: true })
  words!: string[];
}