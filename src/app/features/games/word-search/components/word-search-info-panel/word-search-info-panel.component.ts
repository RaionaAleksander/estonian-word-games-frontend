import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-search-info-panel',
  imports: [],
  templateUrl: './word-search-info-panel.component.html',
  styleUrl: './word-search-info-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchInfoPanelComponent {

  @Input({ required: true })
  rows!: number;

  @Input({ required: true })
  cols!: number;

  @Input({ required: true })
  wordsCount!: number;

  @Input()
  gameType = 'Word Search';
}