# API Campaña

API Campaña es una aplicación construida para demostrar cómo crear una API HTTP simple con Node.js, ejecutándose en AWS Lambda y API Gateway utilizando el Serverless Framework. Este proyecto permite la gestión de campañas publicitarias mediante la creación y consulta de las mismas a través de endpoints HTTP.

## Características

- **Gestión de campañas publicitarias:** Permite crear y consultar campañas.
- **Integración con AWS Lambda y API Gateway:** Utiliza AWS para el despliegue y manejo de la infraestructura.
- **Uso de Serverless Framework:** Facilita el despliegue y la configuración en la nube.

## Requisitos

Para ejecutar este proyecto localmente, necesitarás tener instalado:

- **Node.js** (versión recomendada: 14.x o superior)
- **npm** (viene con Node.js)
- **Serverless Framework**

## Configuración

Antes de ejecutar el proyecto, asegúrate de configurar las variables de entorno necesarias. Estas variables deben incluirse en el entorno de ejecución o especificarse directamente en los scripts de `package.json` para desarrollo local:


## Instalación

Clona este repositorio y navega al directorio del proyecto. Ejecuta el siguiente comando para instalar las dependencias:

npm install


## Ejecución

Clona este repositorio y navega al directorio del proyecto. Ejecuta el siguiente comando para instalar las dependencias:

npm install

## Pruebas

Clona este repositorio y navega al directorio del proyecto. Ejecuta el siguiente comando para instalar las dependencias:

npm test

## Documentación API

El archivo de especificación de los endpoints diseñados estan directamente en [api-spec.yaml](./docs/api-spec.yaml).

## Modelado de la base de datos

El archivo se encuentra en [db_camapana](db_campana.sql).
