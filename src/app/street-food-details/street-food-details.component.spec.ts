import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetFoodDetailsComponent } from './street-food-details.component';

describe('StreetFoodDetailsComponent', () => {
  let component: StreetFoodDetailsComponent;
  let fixture: ComponentFixture<StreetFoodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetFoodDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetFoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
