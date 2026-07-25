import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-word-search-controls',
  imports: [],
  templateUrl: './word-search-controls.component.html',
  styleUrl: './word-search-controls.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordSearchControlsComponent {
  @Input() canZoomIn = true;
  @Input() canZoomOut = true;
  @Output() zoomIn = new EventEmitter<void>();
  @Output() zoomOut = new EventEmitter<void>();
  @Output() clean = new EventEmitter<void>();
  @Output() solveAll = new EventEmitter<void>();  
}