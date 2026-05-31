import { Routes } from '@angular/router';
import { WordsPageComponent } from './features/words/pages/words-page/words-page.component';
import { WordDetailsPageComponent } from './features/words/pages/word-details-page/word-details-page.component';
import { WordsRandomPageComponent } from './features/words/pages/words-random-page/words-random-page.component';
import { WordsPatternPageComponent } from './features/words/pages/words-pattern-page/words-pattern-page.component';
import { WordsExistsPageComponent } from './features/words/pages/words-exists-page/words-exists-page.component';
import { WordsDefinitionsPageComponent } from './features/words/pages/words-definitions-page/words-definitions-page.component';

export const routes: Routes = [
  { path: 'words', component: WordsPageComponent },
  { path: 'words/random', component: WordsRandomPageComponent },
  { path: 'words/pattern', component: WordsPatternPageComponent },
  { path: 'words/exists', component: WordsExistsPageComponent },
  { path: 'words/definitions', component: WordsDefinitionsPageComponent },
  { path: 'words/details/:lemma', component: WordDetailsPageComponent },
];
