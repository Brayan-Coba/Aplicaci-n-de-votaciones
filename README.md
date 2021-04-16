Pasos para correr la aplicacion:
	1) Descargar el repositorio de Github https://github.com/Brayan-Coba/Aplicacion-de-votaciones que incluye tambien este readme
	2) Ingresar a la carpeta Back, despues a la carpeta dataModel
	3) Correr el archivo db_aplicacion_de_votaciones.sql para crear la base de datos
	4) Correr el archivo datos_aplicacion_de_votaciones.sql para llenar la base da datos 
	5) Con estos datos ya cuenta con los usuarios Audiores (HGeoffrey , SAniya) y Participantes (SAniya, WGerald, MLaurel) que se generaron para las pruebas /* note que el usuario SAniya cuenta con ambos roles
	6) Ahora vuelva a la carpeta Back e ingrese a la carpeta Server en el editor de codigo.
	7) ingresar en la carpeta data al archivo config.js, aqui puede configurar los datos de su base de datos para una correcta conexion.
	8) instalar las dependencias del packgaje.js.
	9) Abrir consola dentro de editor de codigo y ejecutar el comando npm run dev para montar el servidor local por defecto de usa el puerto 3000.
	10) si desea hacer pruebas desde postman o similares al http://localhost:3000 dispone de los siguientes metodos:
		Login = http://localhost:3000/login con un body tipo JSON con cualquier usuario pues admite todos los roles, por ejemplo {´"user" : "HGeoffrey"}
		getEventos = http://localhost:3000/eventos?user=1 para obtener los eventos, notese que requiere parametro de usuario (?user=id) con cualquier usuario pues admite todos los roles, por ejemplo ?user=4
		getNominadosPorEventos = http://localhost:3000/eventos/2?user=3 para obtener los nominados por eventos notese que requiere parametro de evento (/2) y de usuario (?user=id) con cualquier usuario pues admite todos los roles, por ejemplo ?user=2
		postVotar (Participantes) = http://localhost:3000/votar?user=4 para realizar una votacion, requiere parametro de usuario (?user=id) y un body tipo JSON {"code" : "1"} y solo esta disponible para Participantes
		getVotos (Auditor) = http://localhost:3000/votos?user=1 para ver los votos, requiere parametro parametro de usuario (?user=id) y solo esta disponible para Auditores
	11) En su editor de codigo abra la carpeta de front despues la carpeta aplicacion-de-votaciones e instale las dependencias del packgaje.json
	12) Ya en la carpeta raiz abra la terminal y ejecute el comando ng serve --open esto deberia cargar el servidor de Angular y abrirlo en su navegador en http://localhost:4200
	13) Una vez aqui puede probar los metodos de forma grafica, por falta de tiempo no se ha dejado tan pulido como se podria, al hacer una back fuerte se dejo de lado el css y estilado, no por falta de conocimiento sino de tiempo.
		