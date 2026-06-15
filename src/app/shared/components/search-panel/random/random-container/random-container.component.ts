import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpandableContainerDirective } from '../../foundation/directives/expandable-container.directive';
import { WordRandom } from '../models/word-random.model';
import { RandomSectionComponent } from '../sections/random-section/random-section.component';
import { CollapsibleHeaderComponent } from '../../foundation/collapsible-header/collapsible-header.component';

@Component({
  selector: 'app-random-container',
  imports: [CollapsibleHeaderComponent, RandomSectionComponent],
  templateUrl: './random-container.component.html',
  styleUrl: './random-container.component.css',
})
export class RandomContainerComponent extends ExpandableContainerDirective {

  @Input() random!: WordRandom;
  @Output() randomChange = new EventEmitter<WordRandom>();

  protected updateRandom(partial: Partial<WordRandom>): void {
    this.randomChange.emit({
      ...this.random,
      ...partial,
    });
  }
}
