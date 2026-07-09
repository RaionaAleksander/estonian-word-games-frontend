import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowIntersectionsSectionComponent } from './allow-intersections-section.component';

describe('AllowIntersectionsSectionComponent', () => {
  let component: AllowIntersectionsSectionComponent;
  let fixture: ComponentFixture<AllowIntersectionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllowIntersectionsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllowIntersectionsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
