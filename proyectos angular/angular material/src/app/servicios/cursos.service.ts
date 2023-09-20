import { Component } from '@angular/core';
import { Injectable } from "@angular/core";
import { curso } from "../modelos/cursos";


@Injectable({
    providedIn: 'root'
})

export class CursosService{
	public cursosLista: Array<curso>;

	constructor(

	){
        this.cursosLista = [
			new curso("Física", 500, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", [' Geometría', ' Teoría de Galloir', ' Teoría de Euler'], 'Ciencias', './assets/media/matemáticas.jpg'),
			new curso("Lengua y Literatura", 550, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", [" Shaekspeare", " Cervantes", " Poesía de Antonio Machado"],'Letras', './assets/media/literatura.jpg'),
			new curso("Ciencias Naturales", 480, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus porro ab perspiciatis consequuntur quae vel suscipit similique, officiis, iusto quo eius animi eos. Corrupti, magnam dolorem? Iste, quas aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veniam aliquam quia vero consequuntur! Consectetur rem in saepe? Reiciendis eveniet nihil obcaecati ipsa provident impedit suscipit id! Aut, eligendi esse.", [' Las Células',' El Cuerpo Humano', ' Conociemiento del Médio'], 'Ciencias', './assets/media/ciencias.jpg')
		];

	}

	getCursos(): Array<curso>{
		return this.cursosLista;
	}
}