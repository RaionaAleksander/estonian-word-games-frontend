import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSectionComponent } from './random-section.component';

describe('RandomSectionComponent', () => {
  let component: RandomSectionComponent;
  let fixture: ComponentFixture<RandomSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
