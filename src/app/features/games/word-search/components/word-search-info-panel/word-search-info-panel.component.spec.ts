import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchInfoPanelComponent } from './word-search-info-panel.component';

describe('WordSearchInfoPanelComponent', () => {
  let component: WordSearchInfoPanelComponent;
  let fixture: ComponentFixture<WordSearchInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchInfoPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchInfoPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
