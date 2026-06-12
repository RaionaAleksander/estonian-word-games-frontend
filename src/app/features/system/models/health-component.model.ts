export interface HealthComponent {
  status: string;
  details?: Record<string, any>;
}