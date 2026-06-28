import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchControlsComponent } from './word-search-controls.component';

describe('WordSearchControlsComponent', () => {
  let component: WordSearchControlsComponent;
  let fixture: ComponentFixture<WordSearchControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchControlsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
