import { Directive, EventEmitter, Output } from '@angular/core';

@Directive()
export abstract class BaseGameSettingsSection<T> {

  @Output()
  valueChange = new EventEmitter<Partial<T>>();

  protected emit(partial: Partial<T>): void {
    this.valueChange.emit(partial);
  }
}