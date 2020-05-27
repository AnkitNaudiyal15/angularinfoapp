import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbooncalculatorComponent } from './carbooncalculator.component';

describe('CarbooncalculatorComponent', () => {
  let component: CarbooncalculatorComponent;
  let fixture: ComponentFixture<CarbooncalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbooncalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbooncalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
