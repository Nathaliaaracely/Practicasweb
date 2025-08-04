import { Module } from '@nestjs/common';
import { ActividadesService } from './actividades.service';
import { ActividadesGateway } from './actividades.gateway';

@Module({
  providers: [ActividadesGateway, ActividadesService],
})
export class ActividadesModule {}
