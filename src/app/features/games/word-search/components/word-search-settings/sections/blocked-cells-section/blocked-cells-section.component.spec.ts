import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedCellsSectionComponent } from './blocked-cells-section.component';

describe('BlockedCellsSectionComponent', () => {
  let component: BlockedCellsSectionComponent;
  let fixture: ComponentFixture<BlockedCellsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockedCellsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockedCellsSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
