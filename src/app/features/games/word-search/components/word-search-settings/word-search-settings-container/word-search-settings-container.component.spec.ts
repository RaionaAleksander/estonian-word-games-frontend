import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchSettingsContainerComponent } from './word-search-settings-container.component';

describe('GameSettingsContainerComponent', () => {
  let component: WordSearchSettingsContainerComponent;
  let fixture: ComponentFixture<WordSearchSettingsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSearchSettingsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSearchSettingsContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
