import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedWordSearchGameComponent } from './saved-word-search-game.component';

describe('SavedWordSearchGameComponent', () => {
  let component: SavedWordSearchGameComponent;
  let fixture: ComponentFixture<SavedWordSearchGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedWordSearchGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedWordSearchGameComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
