import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomWordsSummaryPanelComponent } from './random-words-summary-panel.component';

describe('RandomWordsSummaryPanelComponent', () => {
  let component: RandomWordsSummaryPanelComponent;
  let fixture: ComponentFixture<RandomWordsSummaryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomWordsSummaryPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomWordsSummaryPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
