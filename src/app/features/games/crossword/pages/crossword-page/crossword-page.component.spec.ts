import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordPageComponent } from './crossword-page.component';

describe('CrosswordPageComponent', () => {
  let component: CrosswordPageComponent;
  let fixture: ComponentFixture<CrosswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrosswordPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrosswordPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
