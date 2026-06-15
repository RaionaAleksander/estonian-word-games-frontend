import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDefinitionsMainPanelComponent } from './word-definitions-main-panel.component';

describe('WordDefinitionsMainPanelComponent', () => {
  let component: WordDefinitionsMainPanelComponent;
  let fixture: ComponentFixture<WordDefinitionsMainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordDefinitionsMainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordDefinitionsMainPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
