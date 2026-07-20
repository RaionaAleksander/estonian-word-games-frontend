import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGamesMainPanelComponent } from './saved-games-main-panel.component';

describe('SavedGamesMainPanelComponent', () => {
  let component: SavedGamesMainPanelComponent;
  let fixture: ComponentFixture<SavedGamesMainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedGamesMainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedGamesMainPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
