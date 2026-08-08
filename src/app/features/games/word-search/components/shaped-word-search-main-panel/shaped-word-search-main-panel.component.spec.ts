import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapedWordSearchMainPanelComponent } from './shaped-word-search-main-panel.component';

describe('ShapedWordSearchMainPanelComponent', () => {
  let component: ShapedWordSearchMainPanelComponent;
  let fixture: ComponentFixture<ShapedWordSearchMainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapedWordSearchMainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShapedWordSearchMainPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
