import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySectionComponent } from './category-section';

describe('CategorySection', () => {
  let component: CategorySectionComponent;
  let fixture: ComponentFixture<CategorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategorySectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
