import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchCustomPageComponent } from './word-search-custom-page.component';

describe('WordSearchCustomPageComponent', () => {
  let component: WordSearchCustomPageComponent;
  let fixture: ComponentFixture<WordSearchCustomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchCustomPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchCustomPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
