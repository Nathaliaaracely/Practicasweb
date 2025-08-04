import { Module } from '@nestjs/common';
import { ActividadesService } from './actividades.service';
import { ActividadesController } from './actividades.controller';
import { JsonStorageService } from '../storage/json-storage.service';
import { Actividade } from './entities/actividade.entity';

@Module({
  controllers: [ActividadesController],
  providers: [
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
