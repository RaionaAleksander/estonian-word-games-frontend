import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsRandomPageComponent } from './words-random-page.component';

describe('WordsRandomPageComponent', () => {
  let component: WordsRandomPageComponent;
  let fixture: ComponentFixture<WordsRandomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsRandomPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsRandomPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
