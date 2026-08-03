import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapedWordSearchPageComponent } from './shaped-word-search-page.component';

describe('ShapedWordSearchPageComponent', () => {
  let component: ShapedWordSearchPageComponent;
  let fixture: ComponentFixture<ShapedWordSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapedWordSearchPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShapedWordSearchPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
