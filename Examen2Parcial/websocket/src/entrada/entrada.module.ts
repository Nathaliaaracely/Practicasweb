import { Module } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaGateway } from './entrada.gateway';

@Module({
  providers: [EntradaGateway, EntradaService],
})
export class EntradaModule {}
