import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchExportComponent } from './word-search-export.component';

describe('WordSearchExportComponent', () => {
  let component: WordSearchExportComponent;
  let fixture: ComponentFixture<WordSearchExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchExportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchExportComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
