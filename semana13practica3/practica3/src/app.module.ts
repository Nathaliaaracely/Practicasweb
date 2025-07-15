import { Module } from '@nestjs/common';
import { DonacionesModule } from './donaciones/donaciones.module';
import { DonantesModule } from './donantes/donantes.module';
import { ReceptoresModule } from './receptores/receptores.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'app.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // solo desarrollo
    }),
    DonacionesModule, DonantesModule, ReceptoresModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
