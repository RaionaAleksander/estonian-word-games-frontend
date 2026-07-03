import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchDocumentComponent } from './word-search-document.component';

describe('WordSearchDocumentComponent', () => {
  let component: WordSearchDocumentComponent;
  let fixture: ComponentFixture<WordSearchDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchDocumentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchDocumentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
