import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDetailsPage } from './word-details-page';

describe('WordDetailsPage', () => {
  let component: WordDetailsPage;
  let fixture: ComponentFixture<WordDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(WordDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
