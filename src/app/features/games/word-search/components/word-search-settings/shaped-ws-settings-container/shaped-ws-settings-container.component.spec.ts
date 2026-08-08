import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapedWordSearchSettingsContainerComponent } from './shaped-ws-settings-container.component';

describe('ShapedWsSettingsContainerComponent', () => {
  let component: ShapedWordSearchSettingsContainerComponent;
  let fixture: ComponentFixture<ShapedWordSearchSettingsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapedWordSearchSettingsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShapedWordSearchSettingsContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
