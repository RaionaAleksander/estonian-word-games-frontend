import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundarySectionComponent } from './boundary-section';

describe('BoundarySection', () => {
  let component: BoundarySectionComponent;
  let fixture: ComponentFixture<BoundarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoundarySectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoundarySectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
