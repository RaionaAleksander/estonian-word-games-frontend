import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationActiveButtonComponent } from './pagination-active-button.component';

describe('PaginationActiveButtonComponent', () => {
  let component: PaginationActiveButtonComponent;
  let fixture: ComponentFixture<PaginationActiveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationActiveButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationActiveButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
