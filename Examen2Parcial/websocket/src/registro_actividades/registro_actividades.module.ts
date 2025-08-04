import { Module } from '@nestjs/common';
import { RegistroActividadesService } from './registro_actividades.service';
import { RegistroActividadesGateway } from './registro_actividades.gateway';

@Module({
  providers: [RegistroActividadesGateway, RegistroActividadesService],
})
export class RegistroActividadesModule {}
