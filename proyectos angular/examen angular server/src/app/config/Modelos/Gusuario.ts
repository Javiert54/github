export class GUsuario{
	public _id?: string
	public nombre: string
	public apellidos: string
	public Fnacimiento: string
	public email: string
	public telefono: string
	public foto: string
	public pass: string
	public tipo: string
	
	constructor(nombre: string, apellidos: string, Fnacimiento: string, email: string, telefono: string, foto: string, pass: string, tipo: string ){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.Fnacimiento = Fnacimiento;
        this.email = email;
        this.telefono = telefono;
		this.foto = foto;
		this.pass = pass;
		this.tipo = tipo;
		
		}
}