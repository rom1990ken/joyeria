# Pasos generación del proyecto:

* Url de guia: [https://www.bezkoder.com/express-typescript-example/](https://)

* Creación package *.json: `npm init -y`

* Instalar package node_modules: `npm install`

* Instalacion de librerias necesarias: 

> npm install 
    typescript
    ts-node 
    @types/node 
    @types/express 
    @types/cors --save-dev
npm install 
    express 
    cors

* Generacion archivo tsconfig.json: npm `./node_modules/.bin/tsc --init`

** Configuración archivo tsconfig.json:

> ```json
{
  "compilerOptions": {
    "target": "es2016",  
    "experimentalDecorators": true,  
    "emitDecoratorMetadata": true,                   
    "module": "commonjs",                             
    "resolveJsonModule": true,                       
    "sourceMap": true,                                
    "outDir": "./build",                              
    "removeComments": true,                           
    "esModuleInterop": true, 
    "forceConsistentCasingInFileNames": true,         
    "strict": true,                 
    "skipLibCheck": true   
  }
}
```

* Modificar el package.json

> {
    ...
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "dev": "node ./build/server.js",
    "start": "tsc && npm run dev"
  },
}

* Crear archivo index.ts en ./src/index.ts

* Fuera de la carpeta src crear server.ts

* En la carpeta src / routes , cree el archivo home.routes.ts que exporte Routerel objeto.

* Instalacion nodemon en ts: `npm install --save-dev nodemon ts-node`

* Correr server: `npx nodemon ./server.ts`

* Traslipado typescript:` tsc -w`