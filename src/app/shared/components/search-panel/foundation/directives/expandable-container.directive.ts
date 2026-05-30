import { Directive, signal } from "@angular/core";

@Directive()
export abstract class ExpandableContainerDirective {

  protected readonly isExpanded = signal(false);

  protected toggle(): void {
    this.isExpanded.update(v => !v);
  }
}