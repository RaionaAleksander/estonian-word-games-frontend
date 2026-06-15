import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomContainerComponent } from './random-container.component';

describe('RandomContainerComponent', () => {
  let component: RandomContainerComponent;
  let fixture: ComponentFixture<RandomContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
