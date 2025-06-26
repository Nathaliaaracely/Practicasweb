import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductosDonaciones } from './entities/productos-donacione.entity';
import { CreateProductosDonacioneDto } from './dto/create-productos-donacione.dto';
import { UpdateProductosDonacioneDto } from './dto/update-productos-donacione.dto';

@Injectable()
export class ProductosDonacionesService {
  constructor(
    @InjectRepository(ProductosDonaciones)
    private productosDonacionesRepository: Repository<ProductosDonaciones>,
  ) {}

  create(createProductosDonacioneDto: CreateProductosDonacioneDto) {
    const producto = this.productosDonacionesRepository.create(createProductosDonacioneDto);
    return this.productosDonacionesRepository.save(producto);
  }

  findAll() {
    return this.productosDonacionesRepository.find({
      relations: ['donacion'], // Assuming you want to load the related 'donacion' entity
    });
  }

  findOne(id: number) {
    return this.productosDonacionesRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateProductosDonacioneDto: UpdateProductosDonacioneDto) {
    return this.productosDonacionesRepository.update(id, updateProductosDonacioneDto)
      .then(() => this.findOne(id));
  }

  remove(id: number) {
    return this.productosDonacionesRepository.delete(id)
      .then(() => ({ message: 'Producto de donación eliminado exitosamente' }));
  }
}
