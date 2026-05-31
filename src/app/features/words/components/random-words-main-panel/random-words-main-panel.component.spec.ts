import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomWordsMainPanelComponent } from './random-words-main-panel.component';

describe('RandomWordsMainPanelComponent', () => {
  let component: RandomWordsMainPanelComponent;
  let fixture: ComponentFixture<RandomWordsMainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomWordsMainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomWordsMainPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
