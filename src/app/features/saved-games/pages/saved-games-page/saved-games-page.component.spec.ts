import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGamesPageComponent } from './saved-games-page.component';

describe('SavedGamesPageComponent', () => {
  let component: SavedGamesPageComponent;
  let fixture: ComponentFixture<SavedGamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedGamesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedGamesPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
