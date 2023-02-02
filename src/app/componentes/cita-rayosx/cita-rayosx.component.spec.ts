import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaRayosxComponent } from './cita-rayosx.component';

describe('CitaRayosxComponent', () => {
  let component: CitaRayosxComponent;
  let fixture: ComponentFixture<CitaRayosxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaRayosxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaRayosxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
