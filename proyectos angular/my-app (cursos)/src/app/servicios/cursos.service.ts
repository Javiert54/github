import { Component } from '@angular/core';
import { Injectable } from "@angular/core";
import { curso } from "../modelos/cursos";
import { ProfesoresService } from "./profesores.service";
@Injectable({
    providedIn: 'root'
})

export class CursosService{
	public cursosLista: Array<curso>;

	constructor(

	){
        this.cursosLista = [
			new curso("Mates", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", 500),
			new curso("Lengua", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", 550),
			new curso("Ciencias Naturales", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", 480)
		];

	}

	getCursos(): Array<curso>{
		return this.cursosLista;
	}
}