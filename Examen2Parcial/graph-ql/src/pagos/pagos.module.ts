import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosResolver } from './pagos.resolver';
import { JsonStorageService } from '../storage/json-storage.service';
import { Pago } from './entities/pago.entity';

@Module({
  providers: [
    PagosResolver,
    PagosService,
    {
      provide: 'PagosStorage',
      useFactory: () => {
        return new JsonStorageService<Pago>('data', 'pagos.json');
      },
    },
  ],
})
export class PagosModule {}
