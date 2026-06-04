import { Routes } from '@angular/router';
import { WordsPageComponent } from './features/words/pages/words-page/words-page.component';
import { WordDetailsPageComponent } from './features/words/pages/word-details-page/word-details-page.component';
import { WordsRandomPageComponent } from './features/words/pages/words-random-page/words-random-page.component';
import { WordsPatternPageComponent } from './features/words/pages/words-pattern-page/words-pattern-page.component';
import { WordsExistsPageComponent } from './features/words/pages/words-exists-page/words-exists-page.component';
import { WordsDefinitionsPageComponent } from './features/words/pages/words-definitions-page/words-definitions-page.component';
import { BackendUnavailablePageComponent } from './features/system/pages/backend-unavailable-page/backend-unavailable-page.component';
import { NotFoundPageComponent } from './features/system/pages/not-found-page.component/not-found-page.component';
import { BackendHealthGuard } from './core/guards/backend-health.guard';

export const routes: Routes = [
  { path: 'words', component: WordsPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/random', component: WordsRandomPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/pattern', component: WordsPatternPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/exists', component: WordsExistsPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/definitions', component: WordsDefinitionsPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/details/:lemma', component: WordDetailsPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'backend-unavailable', component: BackendUnavailablePageComponent },
  { path: '**', component: NotFoundPageComponent },
];
