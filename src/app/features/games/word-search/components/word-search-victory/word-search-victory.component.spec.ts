import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchVictoryComponent } from './word-search-victory.component';

describe('WordSearchVictoryComponent', () => {
  let component: WordSearchVictoryComponent;
  let fixture: ComponentFixture<WordSearchVictoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchVictoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchVictoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
