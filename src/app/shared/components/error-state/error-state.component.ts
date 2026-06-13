import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ErrorResponse } from '../../api/error-response.model';

@Component({
  selector: 'app-error-state',
  imports: [DatePipe],
  templateUrl: './error-state.component.html',
  styleUrl: './error-state.component.css',
})
export class ErrorStateComponent {

  @Input({ required: true })
  error!: ErrorResponse;
}