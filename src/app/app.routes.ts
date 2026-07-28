import { Routes } from '@angular/router';
import { WordsPageComponent } from './features/words/pages/words-page/words-page.component';
import { WordDetailsPageComponent } from './features/words/pages/word-details-page/word-details-page.component';
import { WordsRandomPageComponent } from './features/words/pages/words-random-page/words-random-page.component';
import { WordsPatternPageComponent } from './features/words/pages/words-pattern-page/words-pattern-page.component';
import { WordsExistsPageComponent } from './features/words/pages/words-exists-page/words-exists-page.component';
import { WordsDefinitionsPageComponent } from './features/words/pages/words-definitions-page/words-definitions-page.component';
import { BackendUnavailablePageComponent } from './features/system/pages/backend-unavailable-page/backend-unavailable-page.component';
import { NotFoundPageComponent } from './features/system/pages/not-found-page/not-found-page.component';
import { BackendHealthGuard } from './core/guards/backend-health.guard';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { BackendHealthPageComponent } from './features/system/pages/backend-health-page/backend-health-page.component';
import { WordsHomePageComponent } from './features/words/pages/words-home-page/words-home-page.component';
import { GamesHomePageComponent } from './features/games/home/games-home-page/games-home-page.component';
import { WordSearchPageComponent } from './features/games/word-search/pages/word-search-page/word-search-page.component';
import { CrosswordPageComponent } from './features/games/crossword/pages/crossword-page/crossword-page.component';
import { SavedGamesPageComponent } from './features/saved-games/pages/saved-games-page/saved-games-page.component';
import { WordSearchCustomPageComponent } from './features/games/word-search/pages/word-search-custom-page/word-search-custom-page.component';
import { SavedGamePageComponent } from './features/saved-games/pages/saved-game-page/saved-game-page.component';
import { WordCategoriesPageComponent } from './features/words/pages/word-categories-page/word-categories-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },

  // WORDS
  { path: 'words', component: WordsHomePageComponent },
  { path: 'words/page', component: WordsPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/random', component: WordsRandomPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/pattern', component: WordsPatternPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/exists', component: WordsExistsPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/definitions', component: WordsDefinitionsPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/details/:lemma', component: WordDetailsPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'words/categories', component: WordCategoriesPageComponent, canActivate: [BackendHealthGuard]},

  // GAMES
  { path: 'games', component: GamesHomePageComponent },
  { path: 'games/crossword', component: CrosswordPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'games/sonasegadik', component: WordSearchPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'games/sonasegadik-custom', component: WordSearchCustomPageComponent, canActivate: [BackendHealthGuard] },
  
  // SYSTEM
  { path: 'backend-unavailable', component: BackendUnavailablePageComponent },
  { path: 'backend-health', component: BackendHealthPageComponent, canActivate: [BackendHealthGuard] },

  // SAVED GAMES
  { path: 'saved-games', component: SavedGamesPageComponent, canActivate: [BackendHealthGuard] },
  { path: 'saved-games/:id', component: SavedGamePageComponent, canActivate: [BackendHealthGuard] },
  
  { path: '**', component: NotFoundPageComponent },
];
