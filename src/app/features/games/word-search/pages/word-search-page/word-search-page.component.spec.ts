import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchPageComponent } from './word-search-page.component';

describe('WordSearchPageComponent', () => {
  let component: WordSearchPageComponent;
  let fixture: ComponentFixture<WordSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
