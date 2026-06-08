import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDetailsResultComponent } from './word-details-result.component';

describe('WordDetailsResultComponent', () => {
  let component: WordDetailsResultComponent;
  let fixture: ComponentFixture<WordDetailsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordDetailsResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordDetailsResultComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
