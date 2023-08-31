import { TestBed } from '@angular/core/testing';

import { ListaserviciosService } from './listaservicios.service';

describe('ListaserviciosService', () => {
  let service: ListaserviciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaserviciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
