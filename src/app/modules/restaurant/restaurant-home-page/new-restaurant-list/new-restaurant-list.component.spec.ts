import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRestaurantListComponent } from './new-restaurant-list.component';

describe('NewRestaurantListComponent', () => {
  let component: NewRestaurantListComponent;
  let fixture: ComponentFixture<NewRestaurantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRestaurantListComponent]
    });
    fixture = TestBed.createComponent(NewRestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
