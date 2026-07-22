import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGamesActionsPanelComponent } from './saved-games-actions-panel.component';

describe('SavedGamesActionsPanelComponent', () => {
  let component: SavedGamesActionsPanelComponent;
  let fixture: ComponentFixture<SavedGamesActionsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedGamesActionsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedGamesActionsPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
