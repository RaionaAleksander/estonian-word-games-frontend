import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomShapedWordSearchSettingsContainerComponent } from './custom-shaped-ws-settings-container.component';

describe('CustomShapedWordSearchSettingsContainerComponent', () => {
  let component: CustomShapedWordSearchSettingsContainerComponent;
  let fixture: ComponentFixture<CustomShapedWordSearchSettingsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomShapedWordSearchSettingsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomShapedWordSearchSettingsContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
