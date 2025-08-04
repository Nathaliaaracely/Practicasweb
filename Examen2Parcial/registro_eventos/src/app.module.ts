import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EventosModule } from './eventos/eventos.module';
import { ActividadesModule } from './actividades/actividades.module';
import { ConfigModule } from '@nestjs/config';
import { RegistroActividadesModule } from './registro_actividades/registro_actividades.module';
import { EntradaModule } from './entrada/entrada.module';
import { PagosModule } from './pagos/pagos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsuariosModule, EventosModule, ActividadesModule, RegistroActividadesModule, EntradaModule, PagosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
