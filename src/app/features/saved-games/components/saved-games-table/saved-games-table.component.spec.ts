import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedGamesTableComponent } from './saved-games-table.component';

describe('SavedGamesTableComponent', () => {
  let component: SavedGamesTableComponent;
  let fixture: ComponentFixture<SavedGamesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedGamesTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedGamesTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
