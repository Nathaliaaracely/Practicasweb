import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { JsonStorageService } from '../storage/json-storage.service';
import { Evento } from './entities/evento.entity';

@Module({
  controllers: [EventosController],
  providers: [
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
