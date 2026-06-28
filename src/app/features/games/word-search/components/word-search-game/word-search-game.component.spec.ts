import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchGameComponent } from './word-search-game.component';

describe('WordSearchGameComponent', () => {
  let component: WordSearchGameComponent;
  let fixture: ComponentFixture<WordSearchGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchGameComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
