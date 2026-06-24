import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchWordsComponent } from './word-search-words.component';

describe('WordSearchWordsComponent', () => {
  let component: WordSearchWordsComponent;
  let fixture: ComponentFixture<WordSearchWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchWordsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchWordsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
