import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowIncompleteSectionComponent } from './allow-incomplete-section.component';

describe('AllowIncompleteSectionComponent', () => {
  let component: AllowIncompleteSectionComponent;
  let fixture: ComponentFixture<AllowIncompleteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllowIncompleteSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllowIncompleteSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
