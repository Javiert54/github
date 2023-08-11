$(function () {

    $( "#accordion" ).accordion({
        heightStyle: "content"
      });

    $("#registro").on("click", function () {

        // $("#content").empty();

        $("#content").empty();
        $("#content").addClass("formulario");
        $("#content").removeClass("inform");
        var texto = '<form action= "https://reqres.in/api/users" id="formularioRegistro"><input name="username" placeholder="Nombre" id="username" type="text"><input placeholder="Correo" name = "correo" id="correo" type="email"><input placeholder="Contraseña" type="password" name="password" id="password"><input placeholder="Teléfono" name = "telefono" id="telefono" type="number"><input placeholder="Foto de Perfil" name = "fotoPerfil" id="fotoPerfil" type="url"><input type="submit" id="registrarse" value="Registrarse"></form><div id="datos"></div>';
        var content = $("#content");
        content.append(texto);

    });




	$("#formularioRegistro").submit(function(e){


        var usuario = {
            nombre: $("input[name='username']").val(),
            correo: $("input[name = 'correo']").val(),
            telefono: $("input[name = 'telefono']").val(),
            fotoPerfil: $("input[name = 'fotoPerfil']").val()
        }


        $.ajax({
            url: $(this).attr("action"),
            type: "POST",

            data: usuario,

        });

    });



    $("#acceso").on("click", function () {


        $("#content").empty();
        $("#content").addClass("formulario");
        $("#content").removeClass("inform");
        var texto = '<form action="https://reqres.in/api/users" id="formularioAcceso"><input name="username" placeholder="Nombre" id="username" type="text"><input placeholder="Correo" name = "correo" id="correo" type="email"><input placeholder="Contraseña" type="password" name="password" id="password"><input type="submit" id="access" value="Iniciar sesión"></form><div id="datos"></div>';
        var content = $("#content");
        content.append(texto);

    });



	$("#formularioAcceso").submit(function(e){

        $.get("https://requres.in/api/users", { page: 2 }, function (respuesta) {

            respuesta.data.array.forEach((element) => {
                $('#datos').append("<p>" + element.first_name + " " + element.last_name + "<p>");

            });
        });

    });




    $("#contacto").on("click", function () {


        $("#content").empty();
        $("#content").addClass("formulario");
        $("#content").removeClass("inform");
        var texto = '<form action="formularioContacto"><input placeholder="Nombre" id="username" type="text"><input placeholder="Correo" id="correo" type="email"><textarea name="message" id="message" cols="30" rows="10" placeholder ="Escribe aquí tu mensaje..."></textarea><input type="submit" id="access" value="Enviar"></form>';
        var content = $("#content");
        content.append(texto);




    });

    $("#cursos").on("click", function () {


        $("#content").empty();
        $("#content").addClass("inform");
        $("#content").removeClass("formulario");
        var texto = '<h3>Información curso</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum quibusdam, dolorum nisi natus voluptate tenetur amet est velit minus nihil maxime impedit architecto, praesentium eos recusandae debitis reprehenderit expedita.</p><img src="media/fondoacademia1.jpg" alt="fotocurso"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor sit ad fuga repellat architecto rerum hic ut similique magnam quasi consequuntur animi quaerat voluptatibus dolores temporibus, minus tempore officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat quaerat harum dolores! Similique saepe veniam minus. Sapiente, excepturi. Suscipit voluptatum nemo ipsum laudantium sed iusto perspiciatis dolorum ex beatae.</p>';
        var content = $("#content");
        content.append(texto);




    });


    $("#informacion").on("click", function () {


        $("#content").empty();
        $("#content").addClass("inform");
        $("#content").removeClass("formulario");
        var texto = '<h3>¡Impartimos la mejor formación!</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum quibusdam, dolorum nisi natus voluptate tenetur amet est velit minus nihil maxime impedit architecto, praesentium eos recusandae debitis reprehenderit expedita.</p><img src="media/fondoacademia2.jpg" alt="fotocurso"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor sit ad fuga repellat architecto rerum hic ut similique magnam quasi consequuntur animi quaerat voluptatibus dolores temporibus, minus tempore officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione placeat quaerat harum dolores! Similique saepe veniam minus. Sapiente, excepturi. Suscipit voluptatum nemo ipsum laudantium sed iusto perspiciatis dolorum ex beatae.</p>';
        var content = $("#content");
        content.append(texto);




    });


});