import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsRecentlyViewedComponent } from './restaurants-recently-viewed.component';

describe('RestaurantsRecentlyViewedComponent', () => {
  let component: RestaurantsRecentlyViewedComponent;
  let fixture: ComponentFixture<RestaurantsRecentlyViewedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsRecentlyViewedComponent]
    });
    fixture = TestBed.createComponent(RestaurantsRecentlyViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
