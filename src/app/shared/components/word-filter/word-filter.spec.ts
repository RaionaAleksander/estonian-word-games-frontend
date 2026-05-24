import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFilterComponent } from './word-filter';

describe('WordFilter', () => {
  let component: WordFilterComponent;
  let fixture: ComponentFixture<WordFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordFilterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
