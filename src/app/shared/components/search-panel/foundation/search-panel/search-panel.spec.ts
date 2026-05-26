import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPanelComponent } from './search-panel';

describe('SearchPanel', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
