import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal, computed } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() currentPage = 0; // 0-based
  @Input() totalPages = 0;

  @Output() pageChange = new EventEmitter<number>();

  protected goToPageInput = signal<number | null>(null);

  protected goToPage(page: number): void {
    if (page < 0 || page >= this.totalPages) return;
    this.pageChange.emit(page);
  }

  protected goToFirst(): void {
    this.goToPage(0);
  }

  protected goToLast(): void {
    this.goToPage(this.totalPages - 1);
  }

  protected goToPrev(): void {
    this.goToPage(this.currentPage - 1);
  }

  protected goToNext(): void {
    this.goToPage(this.currentPage + 1);
  }

  protected onGo(): void {
    const page = this.goToPageInput();

    if (page === null || page === undefined) return;

    const normalizedPage = page - 1; // UI → 1-based, backend → 0-based

    if (normalizedPage < 0 || normalizedPage >= this.totalPages) return;

    this.goToPage(normalizedPage);
  }

  protected isGoDisabled = computed(() => {
    const value = this.goToPageInput();
    const total = this.totalPages;

    if (value === null || value === undefined) return true;

    if (value <= 0) return true;

    if (value > total) return true;

    return false;
  });
}