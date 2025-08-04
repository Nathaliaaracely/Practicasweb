import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosResolver } from './usuarios.resolver';
import { JsonStorageService } from '../storage/json-storage.service';
import { Usuario } from './entities/usuario.entity';

@Module({
  providers: [
    UsuariosResolver,
    UsuariosService,
    {
      provide: 'UsuariosStorage',
      useFactory: () => {
        return new JsonStorageService<Usuario>('data', 'usuarios.json');
      },
    },
  ],
})
export class UsuariosModule {}
