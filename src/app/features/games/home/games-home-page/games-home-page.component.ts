import { Component } from '@angular/core';
import { NavigationCardComponent } from '../../../../shared/components/navigation-card/navigation-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-games-home-page',
  imports: [NavigationCardComponent, RouterLink],
  templateUrl: './games-home-page.component.html',
  styleUrl: './games-home-page.component.css',
})
export class GamesHomePageComponent {}
