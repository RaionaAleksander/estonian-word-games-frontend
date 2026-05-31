import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Word } from '../../models/word.model';

@Component({
  selector: 'app-word-table',
  imports: [RouterLink],
  templateUrl: './word-table.component.html',
  styleUrl: './word-table.component.css',
})
export class WordTableComponent {
  @Input({ required: true })
  words!: Word[];
}