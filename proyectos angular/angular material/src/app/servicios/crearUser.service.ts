import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";



@Injectable({
	providedIn: 'root'
})
export class crearUserService {
url="http://127.0.0.1:3001/api/usuarios/";

	constructor(private http: HttpClient) { }

	getUsers(){
		return this.http.get(this.url);
	}
	getUser(userId: any):Observable<any>{
		return this.http.get(this.url + userId);
	}
	addUser(user: any):Observable<any>{
		return this.http.post(this.url, user);
	}
}
