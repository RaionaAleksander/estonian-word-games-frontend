import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchSidePanelComponent } from './word-search-side-panel.component';

describe('WordSearchSidePanelComponent', () => {
  let component: WordSearchSidePanelComponent;
  let fixture: ComponentFixture<WordSearchSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchSidePanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchSidePanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
