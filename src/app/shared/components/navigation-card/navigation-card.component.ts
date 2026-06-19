import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-card',
  imports: [RouterLink],
  templateUrl: './navigation-card.component.html',
  styleUrl: './navigation-card.component.css',
})
export class NavigationCardComponent {

  @Input({ required: true })
  title!: string;

  @Input()
  description?: string;

  @Input()
  imageUrl?: string;

  @Input({ required: true })
  route!: string;

  @Input()
  buttonLabel = 'Open';
}