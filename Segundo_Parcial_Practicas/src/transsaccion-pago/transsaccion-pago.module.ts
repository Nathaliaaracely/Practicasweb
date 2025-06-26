import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TranssaccionPagoService } from './transsaccion-pago.service';
import { TranssaccionPagoController } from './transsaccion-pago.controller';
import { TranssaccionPago } from './entities/transsaccion-pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TranssaccionPago])],
  controllers: [TranssaccionPagoController],
  providers: [TranssaccionPagoService],
})
export class TranssaccionPagoModule {}
