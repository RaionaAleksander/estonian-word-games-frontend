import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTableComponent } from './word-table.component';

describe('WordTableComponent', () => {
  let component: WordTableComponent;
  let fixture: ComponentFixture<WordTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
