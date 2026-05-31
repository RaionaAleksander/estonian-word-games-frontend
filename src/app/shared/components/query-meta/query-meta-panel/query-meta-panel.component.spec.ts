import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryMetaPanelComponent } from './query-meta-panel.component';

describe('QueryMetaPanelComponent', () => {
  let component: QueryMetaPanelComponent;
  let fixture: ComponentFixture<QueryMetaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryMetaPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QueryMetaPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
