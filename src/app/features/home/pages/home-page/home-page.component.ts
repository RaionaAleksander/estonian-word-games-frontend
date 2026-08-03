import { Component } from '@angular/core';
import { NavigationCardComponent } from '../../../../shared/components/navigation/navigation-card/navigation-card.component';
import { CardGridComponent } from '../../../../shared/components/navigation/card-grid/card-grid.component';

@Component({
  selector: 'app-home-page',
  imports: [NavigationCardComponent, CardGridComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
