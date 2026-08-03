import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BreadcrumbItem } from './models/breadcrumb-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly items = input.required<BreadcrumbItem[]>();
}