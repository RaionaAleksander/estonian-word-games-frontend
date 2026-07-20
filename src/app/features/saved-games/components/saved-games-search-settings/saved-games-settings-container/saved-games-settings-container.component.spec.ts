import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGamesSettingsContainerComponent } from './saved-games-settings-container.component';

describe('SavedGamesSettingsContainerComponent', () => {
  let component: SavedGamesSettingsContainerComponent;
  let fixture: ComponentFixture<SavedGamesSettingsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedGamesSettingsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedGamesSettingsContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
