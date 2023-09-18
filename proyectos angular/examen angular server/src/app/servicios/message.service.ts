import { message } from "../modelos/messages";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";

@Injectable({	
	providedIn: 'root'
})
export class save_messageService{
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}
	testService(){
		return 'Probando el servicio de Angular'
	}
	saveCurso(message:message): Observable<any>{
		let params = JSON.stringify(message);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.post(this.url+'save-message', params, {headers: headers});
	}
	getCursos(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'messages', {headers:headers});
	}
	getCurso(id:string): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'message/'+id, {headers:headers});
	}
	deleteCurso(id:string): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.delete(this.url+'message/'+id, {headers:headers});
	}
	updateCurso(message:any): Observable<any>{
		let params = JSON.stringify(message);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.put(this.url+'message/'+message._id, params, {headers:headers});
	}

}