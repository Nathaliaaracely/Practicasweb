import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosDonaciones } from './entities/productos-donacione.entity';
import { ProductosDonacionesService } from './productos-donaciones.service';
import { ProductosDonacionesController } from './productos-donaciones.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosDonaciones])],
  controllers: [ProductosDonacionesController],
  providers: [ProductosDonacionesService],
})
export class ProductosDonacionesModule {}
