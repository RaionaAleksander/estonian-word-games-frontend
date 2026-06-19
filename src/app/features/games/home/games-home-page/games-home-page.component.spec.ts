import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesHomePageComponent } from './games-home-page.component';

describe('GamesHomePageComponent', () => {
  let component: GamesHomePageComponent;
  let fixture: ComponentFixture<GamesHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesHomePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamesHomePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
