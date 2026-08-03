import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapedWordSearchCustomPageComponent } from './shaped-word-search-custom-page.component';

describe('ShapedWordSearchCustomPageComponent', () => {
  let component: ShapedWordSearchCustomPageComponent;
  let fixture: ComponentFixture<ShapedWordSearchCustomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapedWordSearchCustomPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShapedWordSearchCustomPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
