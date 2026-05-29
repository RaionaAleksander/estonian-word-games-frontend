import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortContainerComponent } from './sort-container.component';

describe('SortContainerComponent', () => {
  let component: SortContainerComponent;
  let fixture: ComponentFixture<SortContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SortContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
