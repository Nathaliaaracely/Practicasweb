import { Module } from '@nestjs/common';
import { TranssacionesPagosService } from './transsaciones-pagos.service';
import { TranssacionesPagosResolver } from './transsaciones-pagos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TranssacionesPago } from './entities/transsaciones-pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TranssacionesPago])],
  providers: [TranssacionesPagosResolver, TranssacionesPagosService],
})
export class TranssacionesPagosModule {}

