import { Module } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaController } from './entrada.controller';
import { JsonStorageService } from '../storage/json-storage.service';
import { Entrada } from './entities/entrada.entity';

@Module({
  controllers: [EntradaController],
  providers: [
    EntradaService,
    {
      provide: 'EntradasStorage',
      useFactory: () => {
        return new JsonStorageService<Entrada>('data', 'entradas.json');
      },
    },
  ],
})
export class EntradaModule {}
