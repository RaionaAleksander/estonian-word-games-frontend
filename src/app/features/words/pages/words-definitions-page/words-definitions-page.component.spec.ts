import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsDefinitionsPageComponent } from './words-definitions-page.component';

describe('WordsDefinitionsPageComponent', () => {
  let component: WordsDefinitionsPageComponent;
  let fixture: ComponentFixture<WordsDefinitionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsDefinitionsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsDefinitionsPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
