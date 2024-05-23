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

> {
  "compilerOptions": {
    /* Language and Environment */
    "target": "es2016",                               /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */

    /* Modules */
    "module": "commonjs",                             /* Specify what module code is generated. */
    "resolveJsonModule": true,                        /* Enable importing .json files. */

    /* Emit */
    "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    "outDir": "./build",                              /* Specify an output folder for all emitted files. */
    "removeComments": true,                           /* Disable emitting comments. */

    /* Interop Constraints */
    "esModuleInterop": true,                          /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,         /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                   /* Enable all strict type-checking options. */

    /* Completeness */
    "skipLibCheck": true                              /* Skip type checking all .d.ts files. */
  }
}

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