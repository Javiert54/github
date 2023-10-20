import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GUsuario } from '../Modelos/Gusuario';

@Injectable({
  providedIn: 'root'
})
export class GusuarioService {

  url= 'http://localhost:3001/api/usuarios/'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUsuario(usuario: GUsuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }

  obtenerUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarUsuario(id: string, usuario: GUsuario): Observable<any>{
    return this.http.put(this.url + id, usuario)

  }
}
