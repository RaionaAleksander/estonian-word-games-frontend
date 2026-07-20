import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSectionComponent } from './sort-section.component';

describe('SortSectionComponent', () => {
  let component: SortSectionComponent;
  let fixture: ComponentFixture<SortSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SortSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
