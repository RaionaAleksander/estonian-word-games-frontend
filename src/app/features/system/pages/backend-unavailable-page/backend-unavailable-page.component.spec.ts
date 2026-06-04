import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendUnavailablePageComponent } from './backend-unavailable-page.component';

describe('BackendUnavailablePageComponent', () => {
  let component: BackendUnavailablePageComponent;
  let fixture: ComponentFixture<BackendUnavailablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendUnavailablePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackendUnavailablePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
