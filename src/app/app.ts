import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullscreenService } from './core/services/fullscreen.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
