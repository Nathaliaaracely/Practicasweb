import { Module } from '@nestjs/common';
import { RegistroActividadesService } from './registro_actividades.service';
import { RegistroActividadesController } from './registro_actividades.controller';
import { JsonStorageService } from '../storage/json-storage.service';
import { RegistroActividade } from './entities/registro_actividade.entity';

@Module({
  controllers: [RegistroActividadesController],
  providers: [
    RegistroActividadesService,
    {
      provide: 'RegistroActividadesStorage',
      useFactory: () => {
        return new JsonStorageService<RegistroActividade>('data', 'registro_actividades.json');
      },
    },
  ],
})
export class RegistroActividadesModule {}
