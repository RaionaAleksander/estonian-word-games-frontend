import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { HealthResponse } from "../../../features/system/models/health-response.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class HealthApiService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/actuator/health';

  public checkHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(
      this.apiUrl
    );
  }
}