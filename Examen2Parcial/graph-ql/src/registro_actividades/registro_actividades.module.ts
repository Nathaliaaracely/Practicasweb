import { Module } from '@nestjs/common';
import { RegistroActividadesService } from './registro_actividades.service';
import { RegistroActividadesResolver } from './registro_actividades.resolver';
import { JsonStorageService } from '../storage/json-storage.service';
import { RegistroActividade } from './entities/registro_actividade.entity';

@Module({
  providers: [
    RegistroActividadesResolver,
    RegistroActividadesService,
    {
      provide: 'RegistroActividadesStorage',
      useFactory: () => {
        return new JsonStorageService<RegistroActividade>(
          'data',
          'registro_actividades.json',
        );
      },
    },
  ],
})
export class RegistroActividadesModule {}
