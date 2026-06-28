import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-word-search-words',
  imports: [],
  templateUrl: './word-search-words.component.html',
  styleUrl: './word-search-words.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchWordsComponent {

  @Input({ required: true }) words!: string[];

  @Input() foundWords: Set<string> = new Set();

  @Output() hoverWord = new EventEmitter<string>();

  @Output() leaveWord = new EventEmitter<void>();
}