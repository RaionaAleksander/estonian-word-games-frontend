import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportSectionComponent } from './export-section.component';

describe('ExportSectionComponent', () => {
  let component: ExportSectionComponent;
  let fixture: ComponentFixture<ExportSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
