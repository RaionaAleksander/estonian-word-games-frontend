import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RandomWordsApiService } from '../../../../core/api/words/random-words-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WordQueryMeta } from '../../models/word-query-meta.model';
import { RandomWordQuery } from '../../models/random-word-query.model';
import { WordFilters } from '../../../../shared/components/search-panel/filter/models/word-filter.model';
import { WordSort } from '../../../../shared/components/search-panel/sort/models/word-sort.model';
import { Word } from '../../models/word.model';
import { RandomWordsMainPanelComponent } from '../../components/random-words-main-panel/random-words-main-panel.component';
import { RandomWordsSummaryPanelComponent } from '../../components/random-words-summary-panel/random-words-summary-panel.component';
import { RandomWordCloudComponent } from '../../components/random-word-cloud/random-word-cloud.component';
import { QueryMetaPanelComponent } from '../../../../shared/components/query-meta/query-meta-panel/query-meta-panel.component';
import { FilterMetaComponent } from '../../../../shared/components/query-meta/filter-meta/filter-meta.component';
import { SortMetaComponent } from '../../../../shared/components/query-meta/sort-meta/sort-meta.component';
import { buildWordsFiltersParams } from '../../../../shared/utility/words-query/words-query-filters.builder';
import { parseWordFiltersFromQuery } from '../../../../shared/utility/words-query/words-query.filters.parser';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { parseNonNegativeNumber } from '../../../../shared/utility/number-param.util';

@Component({
  selector: 'app-words-random-page',
  imports: [RandomWordsMainPanelComponent, RandomWordsSummaryPanelComponent, RandomWordCloudComponent,
    QueryMetaPanelComponent, FilterMetaComponent, SortMetaComponent, EmptyStateComponent],
  templateUrl: './words-random-page.component.html',
  styleUrl: './words-random-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsRandomPageComponent implements OnInit {

  private readonly randomWordsApiService = inject(RandomWordsApiService);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly words = signal<Word[]>([]);
  protected readonly count = signal(0);

  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  protected readonly meta = signal<WordQueryMeta | null>(null);

  protected readonly generatedAt = signal<string | null>(null);

  protected readonly limit = signal(20);

  protected query: RandomWordQuery = {
    filters: {},
    sort: {},
    limit: 20,
  };

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {

      const limit = parseNonNegativeNumber(params.get('limit'), 20);

      this.limit.set(limit);

      const rawParams: any = {};

      params.keys.forEach(key => {
        rawParams[key] = params.get(key);
      });

      this.query = {
        filters: parseWordFiltersFromQuery(rawParams),
        sort: {
          sort: rawParams['sort'] || undefined,
          order: rawParams['order'] || undefined,
        },
        limit,
      };
      this.loadWords(this.query);
    });
  }

  private loadWords(
    query: RandomWordQuery
  ): void {
    this.loading.set(true);

    this.randomWordsApiService.getRandomWords(
      query.limit,
      {
        ...query.filters,
        ...query.sort,
      }
    )
    .subscribe({
      next: (response) => {
        this.words.set(response.words);
        this.count.set(response.count);
        this.meta.set(response.meta);
        this.generatedAt.set(response.generatedAt);
        this.loading.set(false);
        this.error.set(null);
      },

      error: () => {
        this.error.set(
          'Failed to load random words'
        );
        this.loading.set(false);
      }
    });
  }

  protected onQueryChange(event: {
    filters: WordFilters;
    sort: WordSort;
    limit: number;
  }): void {
    const limit = parseNonNegativeNumber(
      String(event.limit),
      20
    );

    this.query = {
      filters: event.filters,
      sort: event.sort,
      limit,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.buildQueryParams(),
    });

    this.loadWords(this.query);
  }

  private buildQueryParams(): any {
    const params: any = {
      limit: this.query.limit >= 0 ? this.query.limit : 20,
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
      limit: 20,
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
    });
  }
}