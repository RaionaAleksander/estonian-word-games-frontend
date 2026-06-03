import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Word } from '../../models/word.model';

@Component({
  selector: 'app-random-word-cloud',
  imports: [RouterLink],
  templateUrl: './random-word-cloud.component.html',
  styleUrl: './random-word-cloud.component.css',
})
export class RandomWordCloudComponent {
  @Input({ required: true })
  words!: Word[];
}
