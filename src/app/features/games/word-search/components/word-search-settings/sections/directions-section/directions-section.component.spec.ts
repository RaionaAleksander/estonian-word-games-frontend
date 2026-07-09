import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsSectionComponent } from './directions-section.component';

describe('DirectionsSectionComponent', () => {
  let component: DirectionsSectionComponent;
  let fixture: ComponentFixture<DirectionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectionsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectionsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
