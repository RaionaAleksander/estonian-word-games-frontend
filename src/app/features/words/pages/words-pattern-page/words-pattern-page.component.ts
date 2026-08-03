import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../shared/components/navigation/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-words-pattern-page',
  imports: [BreadcrumbsComponent],
  templateUrl: './words-pattern-page.component.html',
  styleUrl: './words-pattern-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordsPatternPageComponent {}
