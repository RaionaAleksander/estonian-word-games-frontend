import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterCaseSectionComponent } from './letter-case-section.component';

describe('LetterCaseSectionComponent', () => {
  let component: LetterCaseSectionComponent;
  let fixture: ComponentFixture<LetterCaseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterCaseSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LetterCaseSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
