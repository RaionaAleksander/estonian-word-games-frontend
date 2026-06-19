import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsHomePageComponent } from './words-home-page.component';

describe('WordsHomePageComponent', () => {
  let component: WordsHomePageComponent;
  let fixture: ComponentFixture<WordsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsHomePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsHomePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
