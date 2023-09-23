import { curso } from "../modelos/cursos";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";

@Injectable({	
	providedIn: 'root'
})
export class save_cursoService{
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}
	testService(){
		return 'Probando el servicio de Angular'
	}
	saveCurso(Curso: curso): Observable<any>{
		// let params = JSON.stringify(Curso);
		// let headers = new HttpHeaders().set('Content-Type', 'application/json');
		// return this._http.post(this.url+'api/cursos', params, {headers: headers});
		return this._http.post(this.url, Curso)
	}
	getCursos(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'api/cursos', {headers:headers});
	}
	getCurso(id:string): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.get(this.url+'api/cursos/'+id, {headers:headers});
	}
	deleteCurso(id:string): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.delete(this.url+'api/cursos/'+id, {headers:headers});
	}
	updateCurso(curso:any, _id:any): Observable<any>{
		let params = JSON.stringify(curso);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.put(this.url+'api/cursos/'+ _id, params, {headers:headers});
	}

}