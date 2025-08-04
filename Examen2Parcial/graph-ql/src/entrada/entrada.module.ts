import { Module } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaResolver } from './entrada.resolver';
import { JsonStorageService } from '../storage/json-storage.service';
import { Entrada } from './entities/entrada.entity';

@Module({
  providers: [
    EntradaResolver,
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
