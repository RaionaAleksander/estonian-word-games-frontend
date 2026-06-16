import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDefinitionsResultComponent } from './word-definitions-result.component';

describe('WordDefinitionsResultComponent', () => {
  let component: WordDefinitionsResultComponent;
  let fixture: ComponentFixture<WordDefinitionsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordDefinitionsResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordDefinitionsResultComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
