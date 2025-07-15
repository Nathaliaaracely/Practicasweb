import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receptore } from './entities/receptore.entity';
import { ReceptoresService } from './receptores.service';
import { ReceptoresGateway } from './receptores.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Receptore])],
  providers: [ReceptoresGateway, ReceptoresService],
})
export class ReceptoresModule {}
