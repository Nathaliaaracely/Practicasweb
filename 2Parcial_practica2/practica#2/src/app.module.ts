import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { DonacionesModule } from './donaciones/donaciones.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ProductosDonacionesModule } from './productos-donaciones/productos-donaciones.module';
import { TranssacionesPagosModule } from './transsaciones-pagos/transsaciones-pagos.module';

@Module({
  imports: [
  ConfigModule.forRoot(),  
  TypeOrmModule.forRoot({
type: 'sqlite',
database: 'db.sqlite', // Nombre del archivo de la base de datos
entities: [__dirname + '/**/*.entity{.ts,.js}'],
synchronize: true, // ¡Solo para desarrollo! Sincroniza el esquema de la BD con las entidades.
}),
GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),

    ConfigModule.forRoot(),
    DonacionesModule,
    ProductosDonacionesModule,
    TranssacionesPagosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
