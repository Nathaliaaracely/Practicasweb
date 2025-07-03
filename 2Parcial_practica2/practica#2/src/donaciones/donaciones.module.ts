import { Module } from '@nestjs/common';
import { DonacionesService } from './donaciones.service';
import { DonacionesResolver } from './donaciones.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donacione } from './entities/donacione.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Donacione]),
  ],
  providers: [DonacionesResolver, DonacionesService],
})
export class DonacionesModule {}
