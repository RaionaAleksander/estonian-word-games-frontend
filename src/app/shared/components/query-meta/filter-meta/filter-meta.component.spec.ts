import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMetaComponent } from './filter-meta.component';

describe('FilterMetaComponent', () => {
  let component: FilterMetaComponent;
  let fixture: ComponentFixture<FilterMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterMetaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterMetaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
