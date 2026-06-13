import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordQuery } from '../../models/word-query.model';
import { WordSort } from '../../../../shared/components/search-panel/sort/models/word-sort.model';
import { WordsApiService } from '../../../../core/api/words/words-api.service';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination-container/pagination-container.component';
import { WordFilters } from '../../../../shared/components/search-panel/filter/models/word-filter.model';
import { WordMainPanelComponent } from '../../components/word-main-panel/word-main-panel.component';
import { WordInfoPanelComponent } from '../../components/word-info-panel/word-info-panel.component';
import { WordTableComponent } from '../../components/word-table/word-table.component';
import { QueryMetaPanelComponent } from '../../../../shared/components/query-meta/query-meta-panel/query-meta-panel.component';
import { FilterMetaComponent } from '../../../../shared/components/query-meta/filter-meta/filter-meta.component';
import { SortMetaComponent } from '../../../../shared/components/query-meta/sort-meta/sort-meta.component';
import { buildWordsFiltersParams } from '../../../../shared/utility/words-query/words-query-filters.builder';
import { parseWordFiltersFromQuery } from '../../../../shared/utility/words-query/words-query.filters.parser';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { LoadingStateComponent } from '../../../../shared/components/loading-state/loading-state.component';
import { ErrorStateComponent } from '../../../../shared/components/error-state/error-state.component';
import { parseNonNegativeNumber } from '../../../../shared/utility/number-param.util';
import { WordPageResponse } from '../../models/word-page-response.model';
import { ErrorResponse } from '../../../../shared/api/error-response.model';
import { mapHttpError } from '../../../../shared/api/map-http-error';

@Component({
  selector: 'app-words-page',
  imports: [PaginationComponent, WordMainPanelComponent, WordInfoPanelComponent, WordTableComponent,
    QueryMetaPanelComponent, FilterMetaComponent, SortMetaComponent, 
    EmptyStateComponent, LoadingStateComponent, ErrorStateComponent],
  templateUrl: './words-page.component.html',
  styleUrl: './words-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsPageComponent implements OnInit {
  private readonly wordsApiService = inject(WordsApiService);

  protected readonly loading = signal(true);

  protected readonly error = signal<ErrorResponse | null>(null);

  protected readonly response = signal<WordPageResponse | null>(null);

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
      const page = parseNonNegativeNumber(params.get('page'), 0);
      const size = parseNonNegativeNumber(params.get('size'), 20);

      const rawParams: any = {};

      params.keys.forEach((key) => {
        rawParams[key] = params.get(key);
      });
      this.query = {
        filters: parseWordFiltersFromQuery(rawParams),
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

    this.error.set(null);
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
        this.response.set(response);
        this.error.set(null);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(mapHttpError(err));
        this.response.set(null);
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

    if (this.query.sort.sort)
      params.sort = this.query.sort.sort;

    if (this.query.sort.order)
      params.order = this.query.sort.order;

    return {
      ...params,
      ...buildWordsFiltersParams(this.query.filters),
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