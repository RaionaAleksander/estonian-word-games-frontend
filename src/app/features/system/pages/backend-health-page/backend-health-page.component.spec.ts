import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendHealthPageComponent } from './backend-health-page.component';

describe('BackendHealthPageComponent', () => {
  let component: BackendHealthPageComponent;
  let fixture: ComponentFixture<BackendHealthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendHealthPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackendHealthPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
