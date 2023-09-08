import { Injectable } from "@angular/core";
import { Component } from '@angular/core';
@Injectable({
    providedIn: 'root'
})

export class FormularioConsultaService{
    public messages: Array<any>

    constructor(

    ){
        this.messages = Array<any>();

    }

    getMessages(): Array<Object>{
		return this.messages;
	}
}