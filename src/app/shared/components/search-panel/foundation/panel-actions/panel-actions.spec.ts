import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelActionsComponent } from './panel-actions';

describe('PanelActionsComponent', () => {
  let component: PanelActionsComponent;
  let fixture: ComponentFixture<PanelActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelActionsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
