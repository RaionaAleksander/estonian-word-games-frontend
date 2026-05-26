import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSectionComponent } from './search-section';

describe('SearchSection', () => {
  let component: SearchSectionComponent;
  let fixture: ComponentFixture<SearchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
