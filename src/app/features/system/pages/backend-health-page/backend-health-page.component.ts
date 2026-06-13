import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { HealthApiService } from '../../../../core/api/health/health-api.service';
import { HealthResponse } from '../../models/health-response.model';
import { LoadingStateComponent } from '../../../../shared/components/loading-state/loading-state.component';

@Component({
  selector: 'app-backend-health-page.component',
  imports: [LoadingStateComponent, KeyValuePipe],
  templateUrl: './backend-health-page.component.html',
  styleUrl: './backend-health-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendHealthPageComponent implements OnInit {

  private readonly healthApi = inject(HealthApiService);

  protected readonly loading = signal(true);

  protected readonly response =
    signal<HealthResponse | null>(null);

  protected readonly componentEntries = computed(() => {

    const res = this.response();

    if (!res) {
      return [];
    }

    return Object.entries(res.components);
  });

  protected readonly totalComponents = computed(
    () => this.componentEntries().length
  );

  protected readonly upCount = computed(
    () => this.componentEntries()
      .filter(([, component]) =>
        component.status === 'UP'
      ).length
  );

  protected readonly downCount = computed(
    () => this.componentEntries()
      .filter(([, component]) =>
        component.status === 'DOWN'
      ).length
  );

  protected readonly otherCount = computed(
    () =>
      this.totalComponents()
      - this.upCount()
      - this.downCount()
  );

  public ngOnInit(): void {

    this.healthApi
      .checkHealth()
      .subscribe({
        next: (response) => {

          this.response.set(response);

          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        },
      });
  }

  protected getStatusClass(status: string): string {

    switch (status) {

      case 'UP':
        return 'text-green-600';

      case 'DOWN':
        return 'text-red-600';

      case 'UNKNOWN':
        return 'text-blue-600';

      default:
        return 'text-yellow-600';
    }
  }

  private readonly nameMap: Record<string, string> = {
    app: 'Application Status',
    db: 'Database (DB)',
    diskSpace: 'Disk Space',
    ping: 'Ping Check',
    ssl: 'SSL Certificate',
  };

  protected formatComponentName(name: string): string {
    if (this.nameMap[name]) {
      return this.nameMap[name];
    }

    return name ? name[0].toUpperCase() + name.slice(1) : 'Unknown component';
  }
}