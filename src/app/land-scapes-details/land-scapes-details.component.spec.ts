import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandScapesDetailsComponent } from './land-scapes-details.component';

describe('LandScapesDetailsComponent', () => {
  let component: LandScapesDetailsComponent;
  let fixture: ComponentFixture<LandScapesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandScapesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandScapesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
