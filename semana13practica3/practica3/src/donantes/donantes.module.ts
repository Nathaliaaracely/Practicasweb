import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonantesService } from './donantes.service';
import { DonantesGateway } from './donantes.gateway';
import { Donante } from './entities/donante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donante])],
  providers: [DonantesGateway, DonantesService],
})
export class DonantesModule {}
