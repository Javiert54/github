import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class curso{
    static _id: string;
    constructor(

        public _id: String,
        public name: String,
        public duration: Number,
        public description: String,
        public temario: String,
        public category: String,
        public fotoPortada: String

    ){


    }
}

    




