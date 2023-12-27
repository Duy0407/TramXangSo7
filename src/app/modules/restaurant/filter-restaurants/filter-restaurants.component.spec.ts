import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRestaurantsComponent } from './filter-restaurants.component';

describe('FilterRestaurantsComponent', () => {
  let component: FilterRestaurantsComponent;
  let fixture: ComponentFixture<FilterRestaurantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterRestaurantsComponent]
    });
    fixture = TestBed.createComponent(FilterRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
