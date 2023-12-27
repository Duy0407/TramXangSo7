import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeaturedRestaurantsComponent } from './list-featured-restaurants.component';

describe('ListFeaturedRestaurantsComponent', () => {
  let component: ListFeaturedRestaurantsComponent;
  let fixture: ComponentFixture<ListFeaturedRestaurantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFeaturedRestaurantsComponent]
    });
    fixture = TestBed.createComponent(ListFeaturedRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
