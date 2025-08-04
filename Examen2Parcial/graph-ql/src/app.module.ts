import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ActividadesModule } from './actividades/actividades.module';
import { EntradaModule } from './entrada/entrada.module';
import { EventosModule } from './eventos/eventos.module';
import { PagosModule } from './pagos/pagos.module';
import { RegistroActividadesModule } from './registro_actividades/registro_actividades.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    UsuariosModule,
    ActividadesModule,
    EntradaModule,
    EventosModule,
    PagosModule,
    RegistroActividadesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
