import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class message{
    static _id: string;
    constructor(

        public name: String,
        public duration: Number,
        public description: String,
        public temario: Array<String>,
        public category: String,
        public fotoPortada: String

    ){


    }
}

    




