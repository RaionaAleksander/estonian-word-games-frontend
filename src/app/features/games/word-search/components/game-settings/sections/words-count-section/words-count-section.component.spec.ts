import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsCountSectionComponent } from './words-count-section.component';

describe('WordsCountSectionComponent', () => {
  let component: WordsCountSectionComponent;
  let fixture: ComponentFixture<WordsCountSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsCountSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsCountSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
