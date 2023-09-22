import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class crearUserService {
	public url: string;

	constructor(public _http:HttpClient){
		this.url="http://127.0.0.1:27017/dbExamen";
	}
	getUser(userId:any):Observable<any>{
		return this._http.get(this.url + userId);
	}
	addUser(user:any):Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-type','application/json');
		return this._http.post(this.url+'/api/users',params,{headers:headers})
	}
}
