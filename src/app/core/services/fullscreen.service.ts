import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class FullscreenService {
  private isFullscreen = false;

  toggle(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      this.isFullscreen = true;

      this.showHint();
    } else {
      document.exitFullscreen();
      this.isFullscreen = false;
    }
  }

  private showHint(): void {
    const el = document.createElement('div');

    el.innerText = 'Press ESC to exit fullscreen';
    el.style.position = 'fixed';
    el.style.bottom = '20px';
    el.style.left = '50%';
    el.style.transform = 'translateX(-50%)';
    el.style.background = 'rgba(0,0,0,0.8)';
    el.style.color = 'white';
    el.style.padding = '8px 12px';
    el.style.borderRadius = '6px';
    el.style.zIndex = '9999';

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 2000);
  }
}