import { Component } from '@angular/core';
import { NavigationCardComponent } from '../../../../shared/components/navigation/navigation-card/navigation-card.component';
import { BreadcrumbsComponent } from '../../../../shared/components/navigation/breadcrumbs/breadcrumbs.component';
import { CardGridComponent } from '../../../../shared/components/navigation/card-grid/card-grid.component';

@Component({
  selector: 'app-games-home-page',
  imports: [NavigationCardComponent, BreadcrumbsComponent, CardGridComponent],
  templateUrl: './games-home-page.component.html',
  styleUrl: './games-home-page.component.css',
})
export class GamesHomePageComponent {}
