import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTable } from './word-table';

describe('WordTable', () => {
  let component: WordTable;
  let fixture: ComponentFixture<WordTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordTable],
    }).compileComponents();

    fixture = TestBed.createComponent(WordTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
