import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedWordSearchExportComponent } from './saved-word-search-export.component';

describe('WordSearchExportComponent', () => {
  let component: SavedWordSearchExportComponent;
  let fixture: ComponentFixture<SavedWordSearchExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedWordSearchExportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavedWordSearchExportComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
