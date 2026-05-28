import { Directive, EventEmitter, Output } from '@angular/core';

@Directive()
export abstract class BaseFilterSectionComponent<T> {

  @Output() valueChange = new EventEmitter<Partial<T>>();

  protected emit(partial: Partial<T>): void {
    this.valueChange.emit(partial);
  }

  protected parseArray(value: string): string[] | undefined {
    const result = value.split(',').map(v => v.trim()).filter(Boolean);
    return result.length ? result : undefined;
  }

  protected normalizeString(value: string): string | undefined {
    const trimmed = value.trim();
    return trimmed || undefined;
  }

  protected parseNumber(value: string): number | undefined {
    if (!value.trim()) {
        return undefined;
    }

    const parsed = Number(value);

    return Number.isNaN(parsed)
        ? undefined
        : parsed;
    }
}