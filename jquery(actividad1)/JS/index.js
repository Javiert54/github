
	$(function(){


		//Recoger datos petición AJAX
		//Get y Post

		$.get("https://requres.in/api/users",{page:2}, function(respuesta){

			respuesta.data.array.forEach((element, index) => {
				$('#datos').append("<p>"+element.first_name+" "+element.last_name+"<p>");	
				// Se su pone que aquí deberían de añadirme los datos dentro del div
			});
		});

		$("#formulario").submit(function(e){
			e.preventDefault();
			var usuario = {
				codigo : $("input[name='codigo']").val(),
				nombre : $("input[name = 'nombre']").val(),
				apellidos: $("input[name = 'apellidos']").val(),
				correo: $("input[name = 'correo']").val(),
				edad: $("input[name = 'edad']").val(),
				fotografia: $("input[name = 'fotografia']").val(),
			}


			$.ajax({	
				type: "POST",
				url: $(this).attr("action"),
				data: usuario,
				beforeSend: function(){
					console.log("Enviando usuario...")
				},
				success: function(respuesta){
					console.log(respuesta)
				},
				error: function(){
					console.log("Ha ocurrido un error")
				},
				timeout: 1000

			});
			
		});
	})