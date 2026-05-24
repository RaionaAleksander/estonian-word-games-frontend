import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-word-details-page',
  imports: [],
  templateUrl: './word-details-page.html',
  styleUrl: './word-details-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordDetailsPageComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly lemma = computed(() =>
    this.route.snapshot.paramMap.get('lemma') ?? ''
  );
}
