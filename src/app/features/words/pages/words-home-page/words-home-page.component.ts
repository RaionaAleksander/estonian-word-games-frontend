import { Component } from '@angular/core';
import { NavigationCardComponent } from '../../../../shared/components/navigation/navigation-card/navigation-card.component';
import { CardGridComponent } from '../../../../shared/components/navigation/card-grid/card-grid.component';
import { BreadcrumbsComponent } from '../../../../shared/components/navigation/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-words-home-page',
  imports: [NavigationCardComponent, BreadcrumbsComponent, CardGridComponent],
  templateUrl: './words-home-page.component.html',
  styleUrl: './words-home-page.component.css',
})
export class WordsHomePageComponent {}