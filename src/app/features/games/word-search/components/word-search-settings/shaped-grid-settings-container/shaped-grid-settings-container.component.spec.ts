import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapedGridSettingsContainerComponent } from './shaped-grid-settings-container.component';

describe('ShapedGridSettingsContainerComponent', () => {
  let component: ShapedGridSettingsContainerComponent;
  let fixture: ComponentFixture<ShapedGridSettingsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapedGridSettingsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShapedGridSettingsContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
