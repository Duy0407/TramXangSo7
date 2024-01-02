import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSearchPageComponent } from './restaurant-search-page.component';

describe('RestaurantSearchPageComponent', () => {
  let component: RestaurantSearchPageComponent;
  let fixture: ComponentFixture<RestaurantSearchPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantSearchPageComponent]
    });
    fixture = TestBed.createComponent(RestaurantSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
