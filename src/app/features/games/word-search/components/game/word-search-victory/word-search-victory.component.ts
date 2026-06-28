import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-word-search-victory',
  imports: [],
  templateUrl: './word-search-victory.component.html',
  styleUrl: './word-search-victory.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchVictoryComponent {
  @Input() isVisible: boolean = false;

  ngOnChanges() {
    if (this.isVisible) {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }
}