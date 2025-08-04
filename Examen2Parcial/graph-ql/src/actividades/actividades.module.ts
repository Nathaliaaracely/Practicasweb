import { Module } from '@nestjs/common';
import { ActividadesService } from './actividades.service';
import { ActividadesResolver } from './actividades.resolver';
import { JsonStorageService } from '../storage/json-storage.service';
import { Actividade } from './entities/actividade.entity';

@Module({
  providers: [
    ActividadesResolver,
    ActividadesService,
    {
      provide: 'ActividadesStorage',
      useFactory: () => {
        return new JsonStorageService<Actividade>('data', 'actividades.json');
      },
    },
  ],
})
export class ActividadesModule {}
