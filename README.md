# API Campaña

API para gestionar campañas publicitarias con Node.js, AWS Lambda, API Gateway y Serverless Framework.

## Características

- Crear y consultar campañas.
- Despliegue en AWS usando Serverless Framework.

## Requisitos

- Node.js 14.x o superior
- npm
- Serverless Framework

## Instalación

Clona este repositorio y navega al directorio del proyecto. Ejecuta el siguiente comando para instalar las dependencias:

```bash
git clone <REPO_URL>
cd <PROJECT_DIRECTORY>
npm install
```


## Ejecución

Ejecuta el siguiente comando ejecutar el proyecto:

```bash
npm run start
```

## Despliegue

Despliega la aplicación en AWS:

```bash
npm run deploy
```

## Eliminacion

Elimina la aplicación desplegada en AWS:

```bash
npm run remove
```


## Swagger
 
Genera y abre la documentación de la API:

```bash
npm run doc
```


## Modelado de la base de datos

El modelo de la base de datos se encuentra en la carpeta config [db_camapana](config/db/db_campana.sql).
