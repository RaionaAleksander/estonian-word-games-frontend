import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludedWordsSectionComponent } from './excluded-words-section.component';

describe('ExcludedWordsSectionComponent', () => {
  let component: ExcludedWordsSectionComponent;
  let fixture: ComponentFixture<ExcludedWordsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcludedWordsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExcludedWordsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
