import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSegadicPageComponent } from './word-segadic-page.component';

describe('WordSegadicPageComponent', () => {
  let component: WordSegadicPageComponent;
  let fixture: ComponentFixture<WordSegadicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSegadicPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSegadicPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
