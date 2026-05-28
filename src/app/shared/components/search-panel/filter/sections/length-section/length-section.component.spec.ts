import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthSectionComponent } from './length-section.component';

describe('LengthSectionComponent', () => {
  let component: LengthSectionComponent;
  let fixture: ComponentFixture<LengthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LengthSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LengthSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
