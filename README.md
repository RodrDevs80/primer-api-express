# Mi Primera API con Express

Este repositorio contiene el código de una API REST simple construida con Node.js y Express.js. La API gestiona información sobre cursos de programación y matemáticas.

## Descripción

Esta API proporciona endpoints para obtener información sobre cursos de programación y matemáticas, incluyendo la posibilidad de filtrar por lenguaje/tema, nivel, buscar por ID, ordenar por vistas, además de permitir crear, actualizar (completa y parcial) y eliminar cursos de programación.

## Estructura del Proyecto

├── app.js # Archivo principal de la aplicación Express
├── datos/
│ └── cursos.js # Datos de los cursos (simulación de base de datos)
├── routers/
│ ├── matematicas.js # Rutas para cursos de matemáticas
│ └── programacion.js # Rutas para cursos de programación
└── package.json # Archivo de configuración de Node.js

## Tecnologías Utilizadas

- Node.js
- Express.js

## Instalación

1.  Clona este repositorio:

    ```bash
    git clone [https://github.com/] https://github.com/RodrDevs80/primer-api-express.git
    ```

2.  Navega al directorio del proyecto:

    ```bash
    cd primer-api-express
    ```

3.  Instala las dependencias:

    ```bash
    npm install
    ```

## Ejecución

Para iniciar el servidor, ejecuta el siguiente comando:

npm start

# El servidor se iniciará en el puerto 3000 (o el puerto definido en la variable de entorno PORT).

## Endpoints

Rutas Principales
GET /: Devuelve un mensaje de bienvenida.
GET /api/cursos: Devuelve la información de todos los cursos (programación y matemáticas).
Rutas para Cursos de Programación (/api/cursos/programacion)
GET /: Devuelve todos los cursos de programación.
GET /:lenguaje: Devuelve cursos de programación filtrados por lenguaje (ej: /api/cursos/programacion/javascript).
Query params: ordenar=vistas ordena los resultados por número de vistas (ej: /api/cursos/programacion/javascript?ordenar=vistas).
GET /buscar-por-id/:id: Devuelve un curso de programación por su ID.
GET /:lenguaje/:nivel: Devuelve cursos de programación filtrados por lenguaje y nivel (ej: /api/cursos/programacion/python/basico).
POST /: Crea un nuevo curso de programación. Requiere un cuerpo en formato JSON con la información del curso.
PUT /:id: Actualiza un curso de programación existente, reemplazando toda la información del curso. Requiere un cuerpo en formato JSON con la información completa del curso a actualizar.
PATCH /:id: Actualiza parcialmente un curso de programación. Requiere un cuerpo en formato JSON con las propiedades a actualizar.
DELETE /:id: Elimina un curso de programación por su ID.
Rutas para Cursos de Matemáticas (/api/cursos/matematicas)
GET /: Devuelve todos los cursos de matemáticas.
GET /:tema: Devuelve cursos de matemáticas filtrados por tema (ej: /api/cursos/matematicas/calculo).
Ejemplos de Peticiones (con curl)
Obtener todos los cursos de programación:

Bash
curl http://localhost:3000/api/cursos/programacion
Obtener cursos de JavaScript ordenados por vistas:
Bash
curl http://localhost:3000/api/cursos/programacion/javascript?ordenar=vistas
Crear un nuevo curso de programación:

Bash
curl -X POST -H "Content-Type: application/json" -d '{
"id": 4,
"titulo": "Aprende React",
"tema": "react",
"vistas": 50000,
"nivel": "intermedio"
}' http://localhost:3000/api/cursos/programacion
Actualizar completamente un curso:

Bash
curl -X PUT -H "Content-Type: application/json" -d '{
"id": 1,
"titulo": "Python para principiantes",
"tema": "python",
"vistas": 25000,
"nivel": "basico"
}' http://localhost:3000/api/cursos/programacion/1
Actualizar Parcialmente un curso:

Bash
curl -X PATCH -H "Content-Type: application/json" -d '{
"vistas": 27000
}' http://localhost:3000/api/cursos/programacion/1
Eliminar un curso:

Bash
curl -X DELETE http://localhost:3000/api/cursos/programacion/1

## Próximas Mejoras

- Implementar una base de datos real (e.g., MongoDB, PostgreSQL).
- Agregar validación de datos de entrada.
- Implementar manejo de errores más robusto.
- Añadir tests unitarios.

## Autor

Carlos E. Rodriguez

## Licencia

MIT
