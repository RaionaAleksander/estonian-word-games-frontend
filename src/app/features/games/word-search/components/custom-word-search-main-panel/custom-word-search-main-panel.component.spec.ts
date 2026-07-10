import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWordSearchMainPanelComponent } from './custom-word-search-main-panel.component';

describe('CustomWordSearchMainPanelComponent', () => {
  let component: CustomWordSearchMainPanelComponent;
  let fixture: ComponentFixture<CustomWordSearchMainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomWordSearchMainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomWordSearchMainPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
