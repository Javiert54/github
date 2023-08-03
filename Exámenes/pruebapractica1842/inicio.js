const root = document.querySelector(':root');


function inicio(){
    document.querySelector("#informate").innerHTML= 
    `
    <h1>¡INFÓRMATE!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos officia id voluptatum animi neque similique necessitatibus sit autem libero harum nobis mollitia, architecto accusamus blanditiis. Ad amet adipisci exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab, temporibus quaerat facere dolor in! Quaerat laborum perspiciatis eaque, minima enim nisi ex in molestiae, dolores, ab doloribus veritatis totam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe accusamus, amet ut molestiae voluptates hic earum enim aliquam doloremque autem unde natus quibusdam laborum iusto fugit blanditiis culpa adipisci asperiores?</p>
    <button onclick="curso()">INFORMACIÓN</button>
    `
    root.style.setProperty('--background', 'url(/Exámenes/pruebapractica1842/img/background1.jpg)');
}

function curso(){
    document.querySelector("#informate").innerHTML=
    `

    <div>
        <video id="curso" src="/Exámenes/pruebapractica1842/img/VideoClase.mp4" autoplay controls></video>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, itaque iusto, error ex tenetur tempore quos consequuntur doloremque est quaerat quod expedita officia repellendus totam aliquid voluptate ipsam facilis asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente, et quos excepturi consequatur eveniet totam mollitia repellendus error cumque dolorum natus placeat odio quo, impedit dolorem recusandae beatae delectus.</p>

    `
    root.style.setProperty('--background', 'url(/Exámenes/pruebapractica1842/img/background2.jpg)');

}

function contacto(){


    document.querySelector("#informate").innerHTML=
    `            
    <div id="formulario">
        <form action="" >
            <label for="nombre">Nombre: <input type="text" id="nombre"></label>
            <label for="correo">Correo: <input type="email" id="correo"></label>
            <label for="nombre">Asunto: <input type="text" id="asunto"></label>
            <label for=""><textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea></label>

            
        </form>
        <button onclick="enviar()">ENVIAR</button>
    </div>

    <div id="textolegal">
        <p>Texto legal Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta repudiandae exercitationem magni dolores id facere aliquid hic accusamus, dolorem, quibusdam sapiente quasi nihil perspiciatis, ducimus iusto minus unde aperiam incidunt?</p>

    </div>
    `
    root.style.setProperty('--background', 'url(/Exámenes/pruebapractica1842/img/background3.jpg)');
}











function alumno(){


    root.style.setProperty('--background', "url(/Exámenes/pruebapractica1842/img/alumnos.jpg)");
}
function profesor(){
    root.style.setProperty('--background', "url(/Exámenes/pruebapractica1842/img/profes.jpg)");
}


var listacontactos = JSON.parse(localStorage.getItem("listacontactos")) || [];


var contador= 1;

function cambiar(){

    if(contador%2==0){

        root.style.setProperty('--backcolor', '#00214A');

    }else{
        root.style.setProperty('--backcolor', '#004A46');



    }
    contador++;
    document.querySelector("#avatar").src = `/Exámenes/pruebapractica1842/img/avatar${contador}.jpg`;


    if(contador>=4){
        contador=0;
    }
}




function enviar(){
    var contactodt = {  //Creamos un objeto con todos los datos insertados en el input
        nombre: document.querySelector("#nombre").value,
        correo: document.querySelector("#correo").value,
        asunto: document.querySelector("#asunto").value,
        mensaje: document.querySelector("#mensaje").value
    }
    listacontactos.push(contactodt);
    localStorage.setItem("listacontactos", JSON.stringify(listacontactos))   //Lo guardamos en la memoria local
}

