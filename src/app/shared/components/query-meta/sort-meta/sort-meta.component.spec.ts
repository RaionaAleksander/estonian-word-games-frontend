import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortMetaComponent } from './sort-meta.component';

describe('SortMetaComponent', () => {
  let component: SortMetaComponent;
  let fixture: ComponentFixture<SortMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortMetaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SortMetaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
