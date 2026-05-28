import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSectionComponent } from './letter-section.component';

describe('LetterSectionComponent', () => {
  let component: LetterSectionComponent;
  let fixture: ComponentFixture<LetterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LetterSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
