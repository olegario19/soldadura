import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasserviciosComponent } from './citasservicios.component';

describe('CitasserviciosComponent', () => {
  let component: CitasserviciosComponent;
  let fixture: ComponentFixture<CitasserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
