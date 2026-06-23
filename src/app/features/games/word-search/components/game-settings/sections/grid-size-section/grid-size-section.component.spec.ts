import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSizeSectionComponent } from './grid-size-section.component';

describe('GridSizeSectionComponent', () => {
  let component: GridSizeSectionComponent;
  let fixture: ComponentFixture<GridSizeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridSizeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridSizeSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
