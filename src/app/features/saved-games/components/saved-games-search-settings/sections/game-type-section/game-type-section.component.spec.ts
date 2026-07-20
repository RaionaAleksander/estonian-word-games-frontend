import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTypeSectionComponent } from './game-type-section.component';

describe('GameTypeSectionComponent', () => {
  let component: GameTypeSectionComponent;
  let fixture: ComponentFixture<GameTypeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTypeSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameTypeSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
