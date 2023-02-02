import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaCirugiaComponent } from './cita-cirugia.component';

describe('CitaCirugiaComponent', () => {
  let component: CitaCirugiaComponent;
  let fixture: ComponentFixture<CitaCirugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaCirugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
