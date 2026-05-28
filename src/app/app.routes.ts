import { Routes } from '@angular/router';
import { WordsPageComponent } from './features/words/pages/words-page/words-page.component';
import { WordDetailsPageComponent } from './features/words/pages/word-details-page/word-details-page.component';


export const routes: Routes = [
  { path: 'words', component: WordsPageComponent },
  { path: 'words/:lemma', component: WordDetailsPageComponent},
];
