import { Request, Response } from 'express';
import { ProductoService } from '../services/ProductoService';

const service = new ProductoService();

export class ProductoController {
  async crear(req: Request, res: Response) {
    try {
      const producto = await service.crearProducto(req.body);
      res.json(producto);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear producto', error });
    }
  }

  async listar(req: Request, res: Response) {
    const productos = await service.listarProductos();
    res.json(productos);
  }
}
