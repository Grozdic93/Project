import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildLifeDetailsComponent } from './wild-life-details.component';

describe('WildLifeDetailsComponent', () => {
  let component: WildLifeDetailsComponent;
  let fixture: ComponentFixture<WildLifeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildLifeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildLifeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
