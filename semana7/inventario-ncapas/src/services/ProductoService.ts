import { productoRepository } from '../infrastructure/repositories/ProductoRepository';
import { Producto } from '../domain/entities/Producto';

export class ProductoService {
  async crearProducto(data: Producto): Promise<Producto> {
    const producto = productoRepository.create(data);
    return await productoRepository.save(producto);
  }

  async listarProductos(): Promise<Producto[]> {
    return await productoRepository.find();
  }
}
