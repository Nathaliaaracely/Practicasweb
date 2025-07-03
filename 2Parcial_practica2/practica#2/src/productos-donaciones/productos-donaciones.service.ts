import { Injectable } from '@nestjs/common';
import { CreateProductosDonacioneInput } from './dto/create-productos-donacione.input';
import { UpdateProductosDonacioneInput } from './dto/update-productos-donacione.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductosDonacione } from './entities/productos-donacione.entity';

@Injectable()
export class ProductosDonacionesService {
constructor(
  @InjectRepository(ProductosDonacione)
  private readonly productosDonacionesRepository: Repository<ProductosDonacione>,
) {}

  create(createProductosDonacioneInput: CreateProductosDonacioneInput) {
    const newProducto = this.productosDonacionesRepository.create(createProductosDonacioneInput);
    return this.productosDonacionesRepository.save(newProducto);
  }

  findAll() {
    return this.productosDonacionesRepository.find();
  }

  findOne(id: string) {
    return this.productosDonacionesRepository.findOne({ where: { id } });
  }

  update(id: string, updateProductosDonacioneInput: UpdateProductosDonacioneInput) {
    return this.productosDonacionesRepository.update(id, updateProductosDonacioneInput);
  }

  remove(id: string) {
    return this.productosDonacionesRepository.delete(id);
  }
}
