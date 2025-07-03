import { Module } from '@nestjs/common';
import { ProductosDonacionesService } from './productos-donaciones.service';
import { ProductosDonacionesResolver } from './productos-donaciones.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosDonacione } from './entities/productos-donacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosDonacione])],
  providers: [ProductosDonacionesResolver, ProductosDonacionesService],
})
export class ProductosDonacionesModule {}
