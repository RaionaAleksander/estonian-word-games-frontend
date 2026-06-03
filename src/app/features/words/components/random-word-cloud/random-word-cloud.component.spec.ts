import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomWordCloudComponent } from './random-word-cloud.component';

describe('RandomWordCloudComponent', () => {
  let component: RandomWordCloudComponent;
  let fixture: ComponentFixture<RandomWordCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomWordCloudComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomWordCloudComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
