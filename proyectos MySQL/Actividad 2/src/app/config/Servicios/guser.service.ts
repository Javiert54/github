import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GUser } from '../Modelos/guser';

@Injectable({
  providedIn: 'root'
})
export class GuserService {

  url= 'http://localhost:3700/api/users/'

  constructor(private http: HttpClient) { }

    getUsers(): Observable<any>{
    return this.http.get(this.url)
    }
    eliminarUser(id: string): Observable<any> {
    return this.http.delete(this.url + id);
    }
    guardarUser(user: GUser ): Observable<any> {
    return this.http.post(this.url, user);
    }
    obtenerUser(id: string): Observable<any> {
    return this.http.get(this.url + id);
    }
    editarUser(id: string, user: GUser ): Observable<any>{
    return this.http.put(this.url + id, user)
    }
}
