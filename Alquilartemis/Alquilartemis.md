# Alquilartemis-Node

Proyecto Alquilartemis en Node con Express para crear un servidor y definir rutas.
Utiliza dotenv para gestionar las variables de entorno de la base de datos.
Emplea promise-mysql para establecer la conexión y realizar peticiones a la base de datos.
Incluye nodemon como dependencia de desarrollo para reiniciar automáticamente el servidor.

## Explicación del Proyecto

1. [Requisitos Previos](#requisitos-previos)
2. [Paquetes De Backend](#paquetes-de-backend)
3. [Instalación](#instalación)
4. [Ejecutar El Servidor](#ejecutar-el-servidor)
5. [Explicación](#explicación)

## Requisitos Previos

- [Node.js](https://nodejs.org/es)
- [Tener la base de datos en Mysql](https://www.mysql.com/)
- [Configuración variables de Entorno](#configuración-variables-de-entorno)

## Paquetes De Backend

- [Node.js](https://nodejs.org/es)
- [Express](https://www.npmjs.com/package/express)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Promise-mysql](https://www.npmjs.com/package/promise-mysql)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Instalación

Comenzamos instalando los paquetes que son necesarios en el proyecto para hacer esto ejecutamos el siguiente comando

```bash
    cd Backend
    npm i
```

## Ejecutar El Servidor

Con el siguiente comando ejecutamos el servidor, ya con esto podremos entrar a las rutas para observar la informacion de la base de datos

```bash
    npm run dev
```

## Explicación

Con el siguiente comando ejecutamos el servidor, ya con esto podremos entrar a las rutas para observar la informacion de la base de datos

| Carpeta                                     |                                            Contiene                                             |
| ------------------------------------------- | :---------------------------------------------------------------------------------------------: |
| Backend                                     |                       Cotiene todo el codigo de Backend para el servidor                        |
| node_modules                                |  Esta Carpeta se crea cuando ejecutamos el comando de instalacion/descarga de paquetes con npm  |
| [src](#carpetas-de-sourcesrc)               | Esta Carpeta contiene todas las carpeta de los Controllers, Db, Routes y el codigo del servidor |
| [.env](#configuración-variables-de-entorno) |           En este archivo se guarda la configuración para hacer la conexión con mysql           |
| package.json                                |          Toda la información del proyecto referente a versiones y paquetes instalados           |

### Configuración Variables de Entorno

Dentro de la carpeta Backend creamos un archivo `.env` esta carpeta es la que contendra la configuración de la conexión con MySQL. El Archivo contiene guardado el **HOST** Servidor host - **DATABASE** Nombre de la base de datos - **USER** Usuario de la base de datos - **PASSWORD** Contraseña del usuario de la base de datos,

Si estamos dentro de Windows podremos poner este codigo en la carpeta

```
HOST = localhost
DATABASE = alquilartemis2
USER = root
PASSWORD =
```

Si estamos en Linux tendremos que cambiar la **USER** por ser una variable reservada del sistema en su lugar podriamos poner **USUARIO**

```
HOST = localhost
DATABASE = alquilartemis2
USUARIO = root
PASSWORD =
```

A su vez tendriamos que cambiar el archivo [database.js](./Backend/src/Db/database.js) y cambiar el `config.user` por `config.usuario`.

### Carpetas de Source(src)

La carpeta [src](./Backend/src/) contiene las siguientes Carpetas y Archivos Generales

| Carpeta                     |                           Contiene                           |
| --------------------------- | :----------------------------------------------------------: |
| [Controllers](#controllers) | Contiene los controlladores de los datos de la base de datos |
| [Db](./Backend/src/Db/)     |              Conexión a la base de datos MySQL               |
| [Routes](#routes)           |                    Creación de las Rutas                     |

| Archivos Generales                   |                                                            Contiene                                                            |
| ------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------: |
| [app.js](./Backend/src/app.js)       | El Archivo contiene dentro la creación del servidor con Express y lo ponemos a escuchar en un puerto con las respectivas Rutas |
| [config.js](./Backend/src/config.js) |             El Archivo contiene la configuración de los datos del archivo `.env` para ser pasados a el archivo Db.             |
| [index.js](./Backend/src/index.js)   |                                        El Archivo contiene la ejecucción del servidor.                                         |

### Archivos

#### Controllers

En esta carpeta podremos encontrar los módulos de controladores para cada respectiva tabla de la base de datos. Cada módulo incluye las funciones:

`GET` con el cual podremos obtener los datos de cada tabla.

```js
export const getCategorias = async (req, res) => {
  try {
    const connection = await getConnection();
    const sql = "SELECT * FROM categorias";
    const result = await connection.query(sql);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
```

La función anterior es de tipo GET que recupera todos los registros de la tabla "categorias" de una base de datos. Establece una conexión a la base de datos utilizando getConnection, ejecuta una consulta SQL de selección y devuelve el resultado como respuesta JSON. En caso de error, se envía un mensaje de error con el estado 500.

`POST` la cual recibe datos en formato JSON para ser enviados a cada tabla de la base de datos.

```js
export const postCategorias = async (req, res) => {
  try {
    const { nombre_categoria, descripcion_categoria, img_categoria } = req.body;
    const connection = await getConnection();
    const sql = `INSERT INTO categorias (nombre_categoria, descripcion_categoria, img_categoria) VALUES (?,?,?)`;
    const result = await connection.query(sql, [
      nombre_categoria,
      descripcion_categoria,
      img_categoria,
    ]);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
```

La función anterior es de tipo POST que permite insertar nuevos registros en la tabla "categorias" de una base de datos. Extrae los datos del cuerpo de la solicitud, establece una conexión a la base de datos utilizando getConnection, ejecuta una consulta SQL de inserción y devuelve el resultado como respuesta JSON. En caso de error, se envía un mensaje de error con el estado 500.

#### Routes

En esta carpeta podremos encontrar los módulos de rutas los cuales serviran de EndPoint e invocacion de los controlladores de cada respectiva Tabla de la base de Datos

```js
import { Router } from "express";
import {
  getCategorias,
  postCategorias,
} from "../Controllers/categorias.controllers.js";

const router = Router();

router.get("/api/categorias", getCategorias);
router.post("/api/categorias", postCategorias);

export default router;
```

| Import                                                                              | From                                             | Descripcion                                                                                                                              |
| ----------------------------------------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `Router`                                                                            | [Express](https://www.npmjs.com/package/express) | Importamos el modulo de rutas de Express para la creación de los EndPoints                                                               |
| [getCategorias postCategorias](./Backend/src/Controllers/categorias.controllers.js) | [Controllers](./Backend/src/Controllers/)        | Importamos el los metodos get y post de los controlladores de la tabla categoria para traer los datos y enviar los datos respectivamente |
