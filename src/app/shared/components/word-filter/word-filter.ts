import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { Output, Input, EventEmitter } from '@angular/core';
import { WordFilters } from '../../../features/words/models/word-filter.model';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.html',
  styleUrl: './word-filter.css',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordFilterComponent {
  protected readonly isExpanded = signal(true);

  private readonly fb = new FormBuilder();

  protected readonly filterForm = this.fb.group({
    minLength: [''],
    maxLength: [''],

    startsWith: [''],
    endsWith: [''],
    pattern: [''],

    contains: [''],
    notContains: [''],

    includeCategories: [''],
    excludeCategories: [''],

    excludedWords: [''],
  });

  @Output() filtersChange = new EventEmitter<WordFilters>();

  @Input() set initialFilters(value: WordFilters | null) {
    if (!value) return;

    this.filterForm.patchValue({
      minLength: value.minLength?.toString() ?? '',
      maxLength: value.maxLength?.toString() ?? '',
      startsWith: value.startsWith ?? '',
      endsWith: value.endsWith ?? '',
      pattern: value.pattern ?? '',
      contains: value.contains?.join(',') ?? '',
      notContains: value.notContains?.join(',') ?? '',
      includeCategories: value.includeCategories?.join(',') ?? '',
      excludeCategories: value.excludeCategories?.join(',') ?? '',
      excludedWords: value.excludedWords?.join(',') ?? '',
    }, { emitEvent: false });
  }

  protected applyFilters(): void {
    const raw = this.filterForm.value;

    const filters: WordFilters = {
      minLength: this.toNumber(raw.minLength),
      maxLength: this.toNumber(raw.maxLength),

      startsWith: raw.startsWith || undefined,
      endsWith: raw.endsWith || undefined,
      pattern: raw.pattern || undefined,

      contains: this.toArray(raw.contains),
      notContains: this.toArray(raw.notContains),
      includeCategories: this.toArray(raw.includeCategories),
      excludeCategories: this.toArray(raw.excludeCategories),
      excludedWords: this.toArray(raw.excludedWords),
    };
    
    this.filtersChange.emit(filters);
  }

  private toArray(value: string | null | undefined): string[] | undefined {
    if (!value) return undefined;

    return value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean);
  }

  private toNumber(value: string | null | undefined): number | undefined {
    if (value === null || value === undefined || value === '') return undefined;

    const num = Number(value);

    return isNaN(num) ? undefined : num;
  }

  protected resetFilters(): void {
    this.filterForm.reset({
      minLength: '',
      maxLength: '',
      startsWith: '',
      endsWith: '',
      pattern: '',
      contains: '',
      notContains: '',
      includeCategories: '',
      excludeCategories: '',
      excludedWords: '',
    });

    this.filtersChange.emit({});
  }

  protected toggleExpanded(): void {
    this.isExpanded.update((value) => !value);
  }
}