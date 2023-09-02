export class ServiciosBD {
    
    constructor(
        public codSer: string,
        public id: number,
        public nombreSer: string,
        public descripcionSer: string,
        public PrecioSer: number,
        public imagenSer: string, 
        public stockSer: boolean,
        public wishList: boolean
    ){}
}
