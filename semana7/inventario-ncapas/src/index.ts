import express from 'express';
import path from 'path'; // 👈 importar path
import { AppDataSource } from './config/data-source';
import { ProductoController } from './controllers/ProductoController';

const app = express();
app.use(express.json());

// Servir HTML y archivos estáticos
app.use(express.static(path.join(__dirname, 'views')));

// Ruta para mostrar una interfaz visual (HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const productoController = new ProductoController();

// Endpoints REST
app.post('/productos', (req, res) => productoController.crear(req, res));
app.get('/productos', (req, res) => productoController.listar(req, res));

// Inicializar conexión con base de datos
AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  })
  .catch((error) => console.error('Error al conectar DB:', error));
