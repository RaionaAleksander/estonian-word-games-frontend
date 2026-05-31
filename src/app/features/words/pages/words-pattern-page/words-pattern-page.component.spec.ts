import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsPatternPageComponent } from './words-pattern-page.component';

describe('WordsPatternPageComponent', () => {
  let component: WordsPatternPageComponent;
  let fixture: ComponentFixture<WordsPatternPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsPatternPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsPatternPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
