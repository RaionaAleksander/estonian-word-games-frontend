import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationInfoPanelComponent } from './pagination-info-panel.component';

describe('PaginationInfoPanelComponent', () => {
  let component: PaginationInfoPanelComponent;
  let fixture: ComponentFixture<PaginationInfoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationInfoPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationInfoPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
