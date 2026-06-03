import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordExistsMainPanelComponent } from './word-exists-main-panel.component';

describe('WordExistsMainPanelComponent', () => {
  let component: WordExistsMainPanelComponent;
  let fixture: ComponentFixture<WordExistsMainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordExistsMainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordExistsMainPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
