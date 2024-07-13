const express = require('express');
const app = express();

// Utiliza el puerto proporcionado por la variable de entorno PORT o el puerto 8080 por defecto
const port = process.env.PORT || 8080;

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Si estás viendo esta página, es que me debes plata... y no digo nombres..pero empieza por Cholo y termina en Chunas! ');
});

// Ruta sobre nosotros
app.get('/about', (req, res) => {
  res.send('Página sobre nosotros');
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
