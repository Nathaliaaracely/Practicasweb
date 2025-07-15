import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonacionesService } from './donaciones.service';
import { DonacionesGateway } from './donaciones.gateway';
import { Donacione } from './entities/donacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donacione])],
  providers: [DonacionesGateway, DonacionesService],
})
export class DonacionesModule {}
