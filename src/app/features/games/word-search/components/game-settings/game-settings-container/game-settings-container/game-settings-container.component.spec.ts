import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSettingsContainerComponent } from './game-settings-container.component';

describe('GameSettingsContainerComponent', () => {
  let component: GameSettingsContainerComponent;
  let fixture: ComponentFixture<GameSettingsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSettingsContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameSettingsContainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
