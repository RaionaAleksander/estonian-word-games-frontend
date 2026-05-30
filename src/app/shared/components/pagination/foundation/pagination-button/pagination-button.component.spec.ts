import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationButtonComponent } from './pagination-button.component';

describe('PaginationButtonComponent', () => {
  let component: PaginationButtonComponent;
  let fixture: ComponentFixture<PaginationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
