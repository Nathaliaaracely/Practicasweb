import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { JsonStorageService } from '../storage/json-storage.service';
import { Usuario } from './entities/usuario.entity';

@Module({
  controllers: [UsuariosController],
  providers: [
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
