import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../shared/components/navigation/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-word-categories-page',
  imports: [BreadcrumbsComponent],
  templateUrl: './word-categories-page.component.html',
  styleUrl: './word-categories-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordCategoriesPageComponent {}
