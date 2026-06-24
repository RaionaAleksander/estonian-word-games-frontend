import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchMainPanelComponent } from './word-search-main-panel.component';

describe('GameMainPanelComponent', () => {
  let component: WordSearchMainPanelComponent;
  let fixture: ComponentFixture<WordSearchMainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchMainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchMainPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
