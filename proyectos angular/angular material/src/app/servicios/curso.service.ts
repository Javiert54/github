import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";



@Injectable({
	providedIn: 'root'
})
export class save_cursoService {
url="http://127.0.0.1:3001/api/cursos/";

	constructor(private http: HttpClient) { }

	getCursos(){
		return this.http.get(this.url);
	}
	getCurso(cursoId: any):Observable<any>{
		return this.http.get(this.url + cursoId);
	}
	saveCurso(curso: any):Observable<any>{
		return this.http.post(this.url, curso);
	}
	updateCurso(ID: any, curso: any):Observable<any>{
		return this.http.put(this.url+ID, curso)
	}
}























// import { curso } from "../modelos/cursos";
// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { Global } from "./global";

// @Injectable({	
// 	providedIn: 'root'
// })
// export class save_cursoService{
// 	public url:string;

// 	constructor(
// 		private _http: HttpClient
// 	){
// 		this.url = Global.url;
// 	}
// 	testService(){
// 		return 'Probando el servicio de Angular'
// 	}
// 	saveCurso(curso:curso): Observable<any>{
// 		let params = JSON.stringify(curso);
// 		let headers = new HttpHeaders().set('Content-Type', 'application/json');
// 		return this._http.post(this.url+'save-curso', params, {headers: headers});
// 	}
// 	getCursos(): Observable<any>{
// 		let headers = new HttpHeaders().set('Content-Type', 'application/json');
// 		return this._http.get(this.url+'cursos', {headers:headers});
// 	}
// 	getCurso(id:string): Observable<any>{
// 		let headers = new HttpHeaders().set('Content-Type', 'application/json');
// 		return this._http.get(this.url+'curso/'+id, {headers:headers});
// 	}
// 	deleteCurso(id:string): Observable<any>{
// 		let headers = new HttpHeaders().set('Content-Type', 'application/json');
// 		return this._http.delete(this.url+'curso/'+id, {headers:headers});
// 	}
// 	updateCurso(curso:any, _id:any): Observable<any>{
// 		let params = JSON.stringify(curso);
// 		let headers = new HttpHeaders().set('Content-Type', 'application/json');
// 		return this._http.put(this.url+'curso/'+_id, params, {headers:headers});
// 	}

// }