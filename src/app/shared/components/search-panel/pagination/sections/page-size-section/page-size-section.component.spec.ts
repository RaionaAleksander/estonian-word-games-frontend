import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSizeSectionComponent } from './page-size-section.component';

describe('PageSizeSectionComponent', () => {
  let component: PageSizeSectionComponent;
  let fixture: ComponentFixture<PageSizeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSizeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSizeSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
