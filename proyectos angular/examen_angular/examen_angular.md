Web tipo: AMAZON

La estructura de la web será básica y simple, siendo “Main”, la única parte que tendrá un contenido alterable por las interacciones del usuario (cuando cambiamos entre “Inicio”, “Inventario”, etc


A.	Header:
1.	Inicio (Botón que lleva a la página de inicio)
2.	Inventario (Te lleva a la página de Inventario)
3.	Iniciar Sesión / Cerrar sesión

B.	Main:
•	Inicio:
En la parte superior hay una barra de búsqueda que nos permitirá encontrar productos cuyos nombres coincidan con lo escrito en la barra de búsqueda. Esta barra de búsqueda también tendrá un sistema de sugerencias predictivo que intentará adivinar lo que intentamos escribir (sugiriendo productos que se encuentren dentro del catálogo). Debajo de la barra de búsqueda, encontraremos una sección con sugerencias de productos comprados por usuarios con un historial de compras similar al nuestro (nuestro historial de compras estará almacenado en el servidor). (En el caso de que el usuario no haya iniciado sesión, esta sección estará oculta). Debajo de la sección de sugerencias, encontramos otra sección con los productos más populares de este mes.

Cuando se utilice la barra buscadora, la sección de sugerencias debe ser sustituida por una sección de productos con nombres coincidentes con el texto introducido. 

•	Inventario:

El inventario se divide en dos secciones:
Sección 1 (lista de deseados):
        Nos encontramos con una lista de productos que han sido guardados por el usuario en esta sección para su posible compra (esta lista de productos se obtiene desde una “lista de deseados” ubicada en el servidor). Si el usuario quiere descartar uno o varios elementos de esta lista, deberá pulsar en un botón situado en la esquina superior derecha con el símbolo de una papelera. Al pulsar sobre este botón, aparecerá un checkbox en la esquina superior derecha de cada elemento, si no marcamos ningún checkbox, y volvemos a darle al botón de la papelera, todo volverá al statu quo anterior a pulsar el botón de la papelera por primera vez. En el caso de que marquemos al menos un checkbox, y pulsemos el botón de la papelera, saldrá un pop up con el siguiente mensaje: “¿Estás seguro de que quieres eliminar los siguientes elementos?” Seguido de una lista con los nombres de los elementos que marcaste. El mensaje vendrá acompañado de dos botones con etiquetas: “Aceptar” y
“Cancelar”. Si le damos a cancelar, todo volverá al statu quo anterior a pulsar el botón de la papelera por primera vez. Si le damos a aceptar, todos los elementos que fueron marcados se descartan de la lista de deseados y también son borrados de la lista de deseados almacenada en el servidor.


Sección 2 (Pedidos pendientes):
                       Esta sección muestra los productos que ya se han comprado, y están en proceso de llegar a su destinatario. La lista mostrada se obtiene a través de una lista de “Pedidos pendientes” ubicada en el servidor. Debajo del nombre de cada producto se muestra una estimación del tiempo que tardará en llegar, y en el caso de que el producto haya llegado a su destino, cambiará la estimación de tiempo por una etiqueta que diga “entregado hace:” seguido de un contador de tiempo en días “días”. Estos productos permanecerán en la sección 2 (y en la lista del servidor) hasta pasados los 2 años de haber entregado el pedido.


Cuando se seleccione un producto hallado a través de la barra buscadora, en la sección de sugerencias o en el inventario, Nos llevará a la página del producto.
    Esta página tendrá una barra buscadora igual que la que encontramos en la página de inicio, y con el mismo funcionamiento.
    Debajo de la barra buscadora, encontramos el nombre del producto que hemos seleccionado, seguido de una imagen de este, su precio, y un botón con la etiqueta “comprar”. Al pulsar sobre este botón, aparecerá un pop up con el mensaje “¿Quieres comprar [producto a comprar] por [precio del producto]?”, donde [producto a comprar] será donde debe poner el nombre del producto, y [precio del producto] el precio que tenga el producto. Este mensaje vendrá acompañado de dos botones con etiquetas: “aceptar” y “cancelar”. Si pulsamos en cancelar, la página volverá a su statu quo anterior a haber pulsado el botón de “comprar”. Si pulsamos en aceptar, se efectuará la transacción, se cerrará el pop up, se añadirá el producto a la lista de productos comprados en el servidor (si tenemos la sesión iniciada), y el producto será enviado a la lista “Pedidos pendientes” del servidor.



•	Iniciar sesión / Cerrar sesión
En el caso de que el usuario ya haya iniciado sesión, al pinchar en la opción “Cerrar sesión” saltará un pop up con el mensaje “¿Quieres cerrar la sesión?” acompañado de dos botones con etiquetas “Sí” y “No”. Si pulsamos en “No”, la página volverá al status quo anterior a haber pulsado en “Cerrar sesión”, si pulsamos en “Sí”, se aplicarán todas las consecuencias de no haber iniciado sesión que se han explicado a lo largo del documento.

En el caso de que el usuario NO haya iniciado sesión, la opción “Cerrar sesión” se verá sustituida por “Iniciar sesión”. Al pinchar sobre esta opción, se abrirá un pop up que contenga un formulario con los campos:
1.	(input de texto )“Correo electrónico o Nombre de usuario”
2.	(input de contraseña) “Contraseña”
3.	(Check box) “Recuérdame”
4.	(input de submitir) “Submit”
5.	(botón) “Quiero registrarme”

Si le damos a “Quiero registrarme”, el contenido del formulario pasará a ser el siguiente:
1.	(input de texto) “Nombre de usuario”
2.	(input de texto) ”Correo electrónico”
3.	(input de contraseña) “Contraseña”
4.	(input de contraseña) “Confirmar contraseña”
5.	(Check box) “Recuérdame”
6.	(input de submitir) “Submit”
7.	(botón) “Quiero iniciar sesión”
                Si le damos a “Quiero iniciar sesión”, el formulario volverá a tener el mismo contenido que el que salió en un primer momento.

En cualquiera de los dos formularios, si le damos al botón “Submit” teniendo uno o varios campos de texto vacíos, nos saltará un mensaje diciendo que el campo que se encuentra vacío es obligatorio, impidiéndonos continuar a menos que sea rellenado. Si en el campo “Nombre de usuario” o en “Correo electrónico” ponemos un username o un correo que ya esté registrado en el servidor, nos saltará un mensaje diciendo “Correo / nombre de usuario no válido. Este ya ha sido registrado”. Si el contenido de los campos “Contraseña” y “Confirmar contraseña” son distintos, nos saltará otro mensaje diciendo “La contraseña y la confirmación de contraseña no tienen el mismo contenido”, impidiéndonos continuar a menos que ambos campos sean rellenados correctamente. Si no se da nada de lo anterior, y estamos en el formulario de “Quiero registrarme”, el servidor guardará todos los datos introducidos en el formulario en la lista de usuarios y nos iniciará sesión. Seguidamente, nos enviará a la página de inicio y cerrará el pop up del formulario. Si no se da nada de lo anterior, y estamos en el formulario “Quiero iniciar sesión”, el servidor buscará nuestros datos en la lista de usuarios, y si los encuentra, habremos iniciado sesión. Seguidamente, nos enviará a la página de inicio y cerrará el pop up del formulario







C.	Footer:
  Aquí se encuentran los derechos legales de la página, los términos de uso, la política de privacidad, etc.
