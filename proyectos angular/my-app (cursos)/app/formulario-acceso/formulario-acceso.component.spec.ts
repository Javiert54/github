import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAccesoComponent } from './formulario-acceso.component';

describe('FormularioAccesoComponent', () => {
  let component: FormularioAccesoComponent;
  let fixture: ComponentFixture<FormularioAccesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAccesoComponent]
    });
    fixture = TestBed.createComponent(FormularioAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
