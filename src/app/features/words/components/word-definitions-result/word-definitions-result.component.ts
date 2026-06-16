import { Component, Input } from '@angular/core';
import { WordDefinitionsResponse } from '../../models/word-definitions-response.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-word-definitions-result',
  imports: [DatePipe],
  templateUrl: './word-definitions-result.component.html',
  styleUrl: './word-definitions-result.component.css',
})
export class WordDefinitionsResultComponent {
  @Input({ required: true })
  result!: WordDefinitionsResponse;
}