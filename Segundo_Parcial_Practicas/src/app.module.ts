import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonacionesModule } from './donaciones/donaciones.module';
import { ProductosDonacionesModule } from './productos-donaciones/productos-donaciones.module';
import { TranssaccionPagoModule } from './transsaccion-pago/transsaccion-pago.module';
@Module({
imports: [
TypeOrmModule.forRoot({
type: 'sqlite',
database: 'db.sqlite', // Nombre del archivo de la base de datos
entities: [__dirname + '/**/*.entity{.ts,.js}'],
synchronize: true, // ¡Solo para desarrollo! Sincroniza el esquema de la BD con las entidades.
}),
DonacionesModule,
ProductosDonacionesModule,
TranssaccionPagoModule,
],
controllers: [],
providers: [],
})
export class AppModule {}