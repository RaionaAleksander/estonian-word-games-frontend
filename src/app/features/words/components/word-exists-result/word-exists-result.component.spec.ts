import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordExistsResultComponent } from './word-exists-result.component';

describe('WordExistsResultComponent', () => {
  let component: WordExistsResultComponent;
  let fixture: ComponentFixture<WordExistsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordExistsResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordExistsResultComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
