import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonacionesService } from './donaciones.service';
import { DonacionesController } from './donaciones.controller';
import { Donaciones } from './entities/donacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Donaciones])],
  controllers: [DonacionesController],
  providers: [DonacionesService],
})
export class DonacionesModule {}
