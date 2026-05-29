import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Word } from '../../models/word.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WordsApiService } from '../../../../core/api/words/words-api.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { WordFilters } from '../../../../shared/components/search-panel/filter/models/word-filter.model';
import { WordMainPanelComponent } from '../../components/word-main-panel/word-main-panel.component';
import { WordQuery } from '../../models/word-query.model';
import { WordSort } from '../../../../shared/components/search-panel/sort/models/word-sort.model';

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

  protected query: WordQuery = {
    filters: {},
    sort: {},
    page: 0,
    size: 20,
  };

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
      this.query = {
        filters: this.parseFiltersFromQuery(rawParams),

        sort: {
          sort: rawParams['sort'] || undefined,
          order: rawParams['order'] || undefined,
        },

        page,
        size,
      };

      this.loadWords(this.query);
    });
  }

  private loadWords(query: WordQuery): void {

    if (query.page < 0 || query.size <= 0) {
      return;
    }

    this.loading.set(true);

    this.wordsApiService.getWordsPage(
      query.page,
      query.size,
      {
        ...query.filters,
        ...query.sort,
      }
    ).subscribe({
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

  protected onQueryChange(event: {
    filters: WordFilters;
    sort: WordSort;
    size: number;
  }): void {

    this.query = {
      ...this.query,
      filters: event.filters,
      sort: event.sort,
      size: event.size,
      page: 0,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.buildQueryParams(),
    });
  }

  protected onPageChange(page: number): void {
    this.query = {
      ...this.query,
      page,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.buildQueryParams(),
    });
  }

  private buildQueryParams(): any {
    const params: any = {
      page: this.query.page,
      size: this.query.size,
    };

    const filters = this.query.filters;

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

    if (this.query.sort.sort)
      params.sort = this.query.sort.sort;

    if (this.query.sort.order)
      params.order = this.query.sort.order;

    params.size = this.query.size;

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
    this.query = {
      filters: {},
      sort: {},
      page: 0,
      size: 20,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: 0
      },
    });
  }
}