import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosResolver } from './eventos.resolver';
import { JsonStorageService } from '../storage/json-storage.service';
import { Evento } from './entities/evento.entity';

@Module({
  providers: [
    EventosResolver,
    EventosService,
    {
      provide: 'EventosStorage',
      useFactory: () => {
        return new JsonStorageService<Evento>('data', 'eventos.json');
      },
    },
  ],
})
export class EventosModule {}
