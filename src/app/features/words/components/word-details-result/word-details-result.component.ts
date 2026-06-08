import { Component, Input } from '@angular/core';
import { WordDetailsResponse } from '../../models/word-details-response.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-word-details-result',
  imports: [DatePipe],
  templateUrl: './word-details-result.component.html',
  styleUrl: './word-details-result.component.css',
})
export class WordDetailsResultComponent {
  @Input({ required: true })
  result!: WordDetailsResponse;
}
