import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturalDetailsComponent } from './architectural-details.component';

describe('ArchitecturalDetailsComponent', () => {
  let component: ArchitecturalDetailsComponent;
  let fixture: ComponentFixture<ArchitecturalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitecturalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitecturalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
