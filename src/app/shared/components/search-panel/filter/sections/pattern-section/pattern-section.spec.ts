import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternSection } from './pattern-section';

describe('PatternSection', () => {
  let component: PatternSection;
  let fixture: ComponentFixture<PatternSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternSection],
    }).compileComponents();

    fixture = TestBed.createComponent(PatternSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
