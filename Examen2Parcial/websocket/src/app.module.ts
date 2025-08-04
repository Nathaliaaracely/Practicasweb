import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActividadesModule } from './actividades/actividades.module';
import { EntradaModule } from './entrada/entrada.module';
import { EventosModule } from './eventos/eventos.module';
import { PagosModule } from './pagos/pagos.module';
import { RegistroActividadesModule } from './registro_actividades/registro_actividades.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [ActividadesModule, EntradaModule, EventosModule, PagosModule, RegistroActividadesModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
