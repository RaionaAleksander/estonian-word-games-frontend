import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BackendStatusService } from '../../../../core/services/backend-status.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-backend-unavailable-page',
  imports: [],
  templateUrl: './backend-unavailable-page.component.html',
  styleUrl: './backend-unavailable-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendUnavailablePageComponent {

  private readonly backendStatus = inject(BackendStatusService);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly checking = signal(false);

  protected readonly isUp = signal<boolean | null>(null);

  protected readonly returnUrl = signal<string>('/');

  ngOnInit(): void {
    const url = this.route.snapshot.queryParamMap.get('returnUrl');

    this.returnUrl.set(url ?? '/');
  }

  protected retry(): void {
    this.checking.set(true);

    this.backendStatus.checkBackend().subscribe({
      next: (ok) => {

        this.isUp.set(ok);
        this.checking.set(false);

        if (ok) {
          this.router.navigateByUrl(
            this.returnUrl()
          );
        }
      },
      error: () => {
        this.isUp.set(false);
        this.checking.set(false);
      },
    });
  }

  protected goHome(): void {
    this.router.navigateByUrl('/');
  }
}
