import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WordExistsResponse } from '../../models/word-exists-response.model';

@Component({
  selector: 'app-word-exists-result',
  imports: [DatePipe],
  templateUrl: './word-exists-result.component.html',
  styleUrl: './word-exists-result.component.css',
})
export class WordExistsResultComponent {

  @Input({ required: true })
  result!: WordExistsResponse;
}
