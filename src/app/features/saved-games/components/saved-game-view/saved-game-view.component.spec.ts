import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGameViewComponent } from './saved-game-view.component';

describe('SavedGameViewComponent', () => {
  let component: SavedGameViewComponent;
  let fixture: ComponentFixture<SavedGameViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedGameViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedGameViewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
