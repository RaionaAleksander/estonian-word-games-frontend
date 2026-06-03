import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordNameSectionComponent } from './word-name-section.component';

describe('WordNameSectionComponent', () => {
  let component: WordNameSectionComponent;
  let fixture: ComponentFixture<WordNameSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordNameSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordNameSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
