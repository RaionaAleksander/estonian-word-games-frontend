import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillAlphabetSectionComponent } from './fill-alphabet-section.component';

describe('FillAlphabetSectionComponent', () => {
  let component: FillAlphabetSectionComponent;
  let fixture: ComponentFixture<FillAlphabetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillAlphabetSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FillAlphabetSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
