import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Word } from '../../models/word.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WordsApiService } from '../../../../core/api/words/words-api.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { WordFilters } from '../../models/word-filter.model';
import { WordMainPanelComponent } from '../../components/word-main-panel/word-main-panel.component';

@Component({
  selector: 'app-words-page',
  imports: [RouterLink, PaginationComponent, WordMainPanelComponent],
  templateUrl: './words-page.component.html',
  styleUrl: './words-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsPageComponent implements OnInit {
  private readonly wordsApiService = inject(WordsApiService);

  protected readonly words = signal<Word[]>([]);

  protected readonly loading = signal(true);

  protected readonly error = signal<string | null>(null);

  protected readonly currentPage = signal(0);
  protected readonly totalPages = signal(1);
  protected readonly pageSize = signal(20);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected activeFilters: WordFilters = {};

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const page = Number(params.get('page')) || 0;
      const size = Number(params.get('size')) || 20;

      this.currentPage.set(page);
      this.pageSize.set(size);

      const rawParams: any = {};

      params.keys.forEach((key) => {
        rawParams[key] = params.get(key);
      });
      this.activeFilters = this.parseFiltersFromQuery(rawParams);

      this.loadWords(page, size, this.activeFilters);
    });
  }

  private loadWords(page: number, size: number, filters: WordFilters): void {

    if (page < 0 || size <= 0) return;

    this.loading.set(true);

    this.wordsApiService.getWordsPage(page, size, filters).subscribe({
      next: (response) => {
        this.words.set(response.words);
        this.totalPages.set(response.totalPages);

        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load words');
        this.loading.set(false);
      },
    });
  }

  protected onPageChange(page: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page,
        size: this.pageSize(),
      },
      queryParamsHandling: 'merge',
    });
  }

  protected onFiltersChange(filters: WordFilters): void {
    this.activeFilters = filters;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.buildQueryParams(filters),
    });
  }

  private buildQueryParams(filters: WordFilters): any {
    const params: any = {
      page: 0,
    };

    if (filters.minLength != null) params.minLength = filters.minLength;
    if (filters.maxLength != null) params.maxLength = filters.maxLength;

    if (filters.startsWith) params.startsWith = filters.startsWith;
    if (filters.endsWith) params.endsWith = filters.endsWith;
    if (filters.pattern) params.pattern = filters.pattern;

    if (Array.isArray(filters.contains) && filters.contains.length)
      params.contains = filters.contains.join(',');

    if (Array.isArray(filters.notContains) && filters.notContains.length)
      params.notContains = filters.notContains.join(',');

    if (Array.isArray(filters.includeCategories) && filters.includeCategories.length)
      params.includeCategories = filters.includeCategories.join(',');

    if (Array.isArray(filters.excludeCategories) && filters.excludeCategories.length)
      params.excludeCategories = filters.excludeCategories.join(',');

    if (Array.isArray(filters.excludedWords) && filters.excludedWords.length)
      params.excludedWords = filters.excludedWords.join(',');

    return params;
  }

  private parseFiltersFromQuery(params: any): WordFilters {
    return {
      minLength: params['minLength'] ? Number(params['minLength']) : undefined,
      maxLength: params['maxLength'] ? Number(params['maxLength']) : undefined,

      startsWith: params['startsWith'] || undefined,
      endsWith: params['endsWith'] || undefined,
      pattern: params['pattern'] || undefined,

      contains: params['contains']
        ? params['contains'].split(',').filter(Boolean)
        : undefined,

      notContains: params['notContains']
        ? params['notContains'].split(',').filter(Boolean)
        : undefined,

      includeCategories: params['includeCategories']
        ? params['includeCategories'].split(',').filter(Boolean)
        : undefined,

      excludeCategories: params['excludeCategories']
        ? params['excludeCategories'].split(',').filter(Boolean)
        : undefined,

      excludedWords: params['excludedWords']
        ? params['excludedWords'].split(',').filter(Boolean)
        : undefined,
    };
  }

  protected onResetAll(): void {
    this.activeFilters = {};

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: 0,
        size: this.pageSize(),
      },
    });
  }
}