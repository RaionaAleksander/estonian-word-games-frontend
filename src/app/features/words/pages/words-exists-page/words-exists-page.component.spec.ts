import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsExistsPageComponent } from './words-exists-page.component';

describe('WordsExistsPageComponent', () => {
  let component: WordsExistsPageComponent;
  let fixture: ComponentFixture<WordsExistsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsExistsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsExistsPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
