import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { BackendStatusService } from "../services/backend-status.service";

@Injectable({
  providedIn: 'root',
})
export class BackendHealthGuard implements CanActivate {

  private readonly backendStatus = inject(BackendStatusService);

  private readonly router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.backendStatus
      .checkBackend()
      .pipe(
        take(1),
        map(isUp => {

          if (isUp) {
            return true;
          }

          return this.router.createUrlTree(
            ['/backend-unavailable'],
            {
              queryParams: {
                returnUrl: state.url,
              },
            }
          );
        }),
      );
  }
}