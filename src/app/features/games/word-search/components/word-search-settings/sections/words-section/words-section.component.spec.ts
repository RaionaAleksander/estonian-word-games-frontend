import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsSectionComponent } from './words-section.component';

describe('WordsSectionComponent', () => {
  let component: WordsSectionComponent;
  let fixture: ComponentFixture<WordsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
