import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseExportComponent } from './database-export.component';

describe('DatabaseExportComponent', () => {
  let component: DatabaseExportComponent;
  let fixture: ComponentFixture<DatabaseExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseExportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatabaseExportComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
