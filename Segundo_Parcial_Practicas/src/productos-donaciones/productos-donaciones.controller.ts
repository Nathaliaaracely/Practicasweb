import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosDonacionesService } from './productos-donaciones.service';
import { CreateProductosDonacioneDto } from './dto/create-productos-donacione.dto';
import { UpdateProductosDonacioneDto } from './dto/update-productos-donacione.dto';

@Controller('productos-donaciones')
export class ProductosDonacionesController {
  constructor(private readonly productosDonacionesService: ProductosDonacionesService) {}

  @Post()
  create(@Body() createProductosDonacioneDto: CreateProductosDonacioneDto) {
    return this.productosDonacionesService.create(createProductosDonacioneDto);
  }

  @Get()
  findAll() {
    return this.productosDonacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosDonacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductosDonacioneDto: UpdateProductosDonacioneDto) {
    return this.productosDonacionesService.update(+id, updateProductosDonacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosDonacionesService.remove(+id);
  }
}
