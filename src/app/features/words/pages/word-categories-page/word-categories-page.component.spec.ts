import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCategoriesPageComponent } from './word-categories-page.component';

describe('WordCategoriesPageComponent', () => {
  let component: WordCategoriesPageComponent;
  let fixture: ComponentFixture<WordCategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCategoriesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordCategoriesPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
