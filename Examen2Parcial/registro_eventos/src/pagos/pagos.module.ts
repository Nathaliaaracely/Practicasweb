import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { JsonStorageService } from '../storage/json-storage.service';
import { Pago } from './entities/pago.entity';

@Module({
  controllers: [PagosController],
  providers: [
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
