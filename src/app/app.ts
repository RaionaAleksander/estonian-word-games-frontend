import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullscreenService } from './core/services/fullscreen.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estonian-word-games-frontend');

  constructor(private fullscreen: FullscreenService) {}

  @HostListener('document:dblclick', ['$event'])
  onDoubleClick(event: MouseEvent): void {
    const el = event.target as HTMLElement;

    if (el.closest('input, textarea, button, select')) {
      return;
    }
    this.fullscreen.toggle();
  }
}
