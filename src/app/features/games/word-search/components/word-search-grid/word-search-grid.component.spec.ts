import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchGridComponent } from './word-search-grid.component';

describe('WordSearchGridComponent', () => {
  let component: WordSearchGridComponent;
  let fixture: ComponentFixture<WordSearchGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchGridComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
