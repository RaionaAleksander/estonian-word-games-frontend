import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWordSearchSettingsContainerComponent } from './custom-word-search-settings-container.component';

describe('CustomWordSearchSettingsContainerComponent', () => {
  let component: CustomWordSearchSettingsContainerComponent;
  let fixture: ComponentFixture<CustomWordSearchSettingsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomWordSearchSettingsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomWordSearchSettingsContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
