//Programación orientada a objetos EN TYPESCRIPT
class ropa{

        //Propiedades
    public color: String;
    public marca: String;
    public talla: String;
    public precio: Number;

        //Métodos
    public setColor(color = "White"){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }

}

var camiseta = new ropa();
camiseta.setColor("Rojo");
