import { inject, Injectable, signal } from "@angular/core";
import { HealthApiService } from "../api/health/health-api.service";
import { catchError, map, Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class BackendStatusService {

  private readonly healthApi = inject(HealthApiService);

  public readonly backendUp = signal<boolean | null>(null);

  private lastCheckTime = 0;

  private readonly cacheTimeMs = 60_000;

  public checkBackend(): Observable<boolean> {

    const now = Date.now();

    const cacheValid = now - this.lastCheckTime < this.cacheTimeMs;

    if (cacheValid && this.backendUp() !== null) {
      return of(this.backendUp()!);
    }

    return this.healthApi
      .checkHealth()
      .pipe(
        map(response =>
          response?.status?.toUpperCase() === 'UP'
        ),

        tap(isUp => {

          this.backendUp.set(isUp);

          this.lastCheckTime = now;
        }),

        catchError(() => {

          this.backendUp.set(false);

          this.lastCheckTime = now;

          return of(false);
        }),
      );
  }
}