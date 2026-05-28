import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternSectionComponent } from './pattern-section.component';

describe('PatternSectionComponent', () => {
  let component: PatternSectionComponent;
  let fixture: ComponentFixture<PatternSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PatternSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
