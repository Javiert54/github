export class GMensaje{
	public _id?: string
	public nombre: string
	public email: string
	public asunto: string
	public mensaje: string
	constructor(nombre: string, email: string, telefono: string, asunto: string, textomensaje: string){
        this.nombre = nombre;
        this.email = email;
        this.asunto = asunto;
        this.mensaje = textomensaje;
    }
}