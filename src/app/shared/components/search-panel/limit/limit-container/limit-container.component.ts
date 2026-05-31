import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WordLimit } from '../models/limit.model';
import { ExpandableContainerDirective } from '../../foundation/directives/expandable-container.directive';
import { LimitSectionComponent } from '../sections/limit-section/limit-section.component';
import { CollapsibleHeaderComponent } from '../../foundation/collapsible-header/collapsible-header.component';

@Component({
  selector: 'app-limit-container',
  imports: [LimitSectionComponent, CollapsibleHeaderComponent],
  templateUrl: './limit-container.component.html',
  styleUrl: './limit-container.component.css',
})
export class LimitContainerComponent extends ExpandableContainerDirective {

  @Input() limit!: WordLimit;
  @Output() limitChange = new EventEmitter<WordLimit>();

  protected updateLimit(partial: Partial<WordLimit>): void {
    this.limitChange.emit({
      ...this.limit,
      ...partial,
    });
  }
}