import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordInfoPanelComponent } from './word-info-panel.component';

describe('WordInfoPanelComponent', () => {
  let component: WordInfoPanelComponent;
  let fixture: ComponentFixture<WordInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordInfoPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordInfoPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
