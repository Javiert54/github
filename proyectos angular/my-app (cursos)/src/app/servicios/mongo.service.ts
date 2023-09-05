import { Injectable } from '@angular/core';

// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017';







@Injectable({
	providedIn: 'root'
})
export class MongoService {

	
	constructor() {

	}

	conexion(){

		// require('mongodb').MongoClient.connect('mongodb://localhost:27017', function (err: any, db: any) {
		// 	var cursor = db.collection('cursos').find({nombreCurso:"angular"});
		
		// 	cursor.each(function (err: any, doc: any) {
		
		// 		console.log(doc);
		// 	});
		
		// });
		
	}
}

function addDato(dato:any){

}