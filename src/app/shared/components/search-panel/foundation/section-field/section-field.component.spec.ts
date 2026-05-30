import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFieldComponent } from './section-field.component';

describe('SectionFieldComponent', () => {
  let component: SectionFieldComponent;
  let fixture: ComponentFixture<SectionFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionFieldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionFieldComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
