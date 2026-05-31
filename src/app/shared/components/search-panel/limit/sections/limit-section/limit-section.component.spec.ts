import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitSectionComponent } from './limit-section.component';

describe('LimitSectionComponent', () => {
  let component: LimitSectionComponent;
  let fixture: ComponentFixture<LimitSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LimitSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
