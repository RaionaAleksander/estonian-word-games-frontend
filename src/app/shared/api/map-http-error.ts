import { HttpErrorResponse } from "@angular/common/http";
import { ErrorResponse } from "./error-response.model";

export function mapHttpError(error: HttpErrorResponse): ErrorResponse {
  if (
    error.error &&
    typeof error.error === 'object' &&
    'message' in error.error
  ) {
    return error.error as ErrorResponse;
  }

  // network / backend down / CORS / DNS / timeout
  if (error.status === 0) {
    return {
      message: 'Backend is unreachable or not responding',
      status: 503,
      error: 'Service Unavailable',
      timestamp: new Date().toISOString(),
      path: '-',
    };
  }

  return {
    message: 'Internal server error',
    status: error.status || 500,
    error: `HTTP ${error.status || 500}`,
    timestamp: new Date().toISOString(),
    path: '-',
  };
}