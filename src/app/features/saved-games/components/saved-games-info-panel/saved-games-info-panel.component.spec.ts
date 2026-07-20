import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGamesInfoPanelComponent } from './saved-games-info-panel.component';

describe('SavedGamesInfoPanelComponent', () => {
  let component: SavedGamesInfoPanelComponent;
  let fixture: ComponentFixture<SavedGamesInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedGamesInfoPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedGamesInfoPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
