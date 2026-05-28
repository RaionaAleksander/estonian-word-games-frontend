import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordMainPanelComponent } from './word-main-panel.component';

describe('WordMainPanelComponent', () => {
  let component: WordMainPanelComponent;
  let fixture: ComponentFixture<WordMainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordMainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordMainPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
