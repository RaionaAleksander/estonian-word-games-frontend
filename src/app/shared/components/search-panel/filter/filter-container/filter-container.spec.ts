import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterContainerComponent } from './filter-container';

describe('FilterContainer', () => {
  let component: FilterContainerComponent;
  let fixture: ComponentFixture<FilterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
