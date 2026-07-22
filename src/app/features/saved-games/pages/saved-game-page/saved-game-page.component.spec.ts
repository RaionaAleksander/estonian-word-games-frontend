import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGamePageComponent } from './saved-game-page.component';

describe('SavedGamePageComponent', () => {
  let component: SavedGamePageComponent;
  let fixture: ComponentFixture<SavedGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedGamePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedGamePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
