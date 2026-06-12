import { HealthComponent } from "./health-component.model";

export interface HealthResponse {
  status: string;
  components: Record<string, HealthComponent>;
}