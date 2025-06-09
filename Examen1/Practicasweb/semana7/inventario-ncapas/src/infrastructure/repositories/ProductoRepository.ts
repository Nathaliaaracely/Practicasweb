import { AppDataSource } from '../../config/data-source';
import { Producto } from '../../domain/entities/Producto';

export const productoRepository = AppDataSource.getRepository(Producto);
