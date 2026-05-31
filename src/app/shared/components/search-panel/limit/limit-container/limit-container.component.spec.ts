import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitContainerComponent } from './limit-container.component';

describe('LimitContainerComponent', () => {
  let component: LimitContainerComponent;
  let fixture: ComponentFixture<LimitContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimitContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LimitContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
