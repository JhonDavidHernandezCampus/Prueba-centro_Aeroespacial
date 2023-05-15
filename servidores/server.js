const express = require('express');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('../db.json');
const middlewares = jsonServer.defaults();
const port = 3000; // Puedes cambiar el número de puerto si es necesario

// Configuración de middlewares
app.use(middlewares);
app.use('/api', router); // Puedes cambiar '/api' por la ruta que desees utilizar

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor JSON Server en funcionamiento en http://localhost:${port}`);
});

