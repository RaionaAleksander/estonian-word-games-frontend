import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDetailsPageComponent } from './word-details-page.component';

describe('WordDetailsPageComponent', () => {
  let component: WordDetailsPageComponent;
  let fixture: ComponentFixture<WordDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordDetailsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordDetailsPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
