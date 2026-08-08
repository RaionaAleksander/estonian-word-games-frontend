import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomShapedWordSearchMainPanelComponent } from './custom-shaped-word-search-main-panel.component';

describe('CustomShapedWordSearchMainPanelComponent', () => {
  let component: CustomShapedWordSearchMainPanelComponent;
  let fixture: ComponentFixture<CustomShapedWordSearchMainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomShapedWordSearchMainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomShapedWordSearchMainPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
