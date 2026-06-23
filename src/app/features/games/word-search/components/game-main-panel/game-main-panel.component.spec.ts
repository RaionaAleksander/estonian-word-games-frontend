import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMainPanelComponent } from './game-main-panel.component';

describe('GameMainPanelComponent', () => {
  let component: GameMainPanelComponent;
  let fixture: ComponentFixture<GameMainPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameMainPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameMainPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
