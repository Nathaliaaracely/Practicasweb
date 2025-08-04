import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@WebSocketGateway()
export class UsuariosGateway {
  constructor(private readonly usuariosService: UsuariosService) {}

  @SubscribeMessage('createUsuario')
  create(@MessageBody() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @SubscribeMessage('findAllUsuarios')
  findAll() {
    return this.usuariosService.findAll();
  }

  @SubscribeMessage('findOneUsuario')
  findOne(@MessageBody() id: number) {
    return this.usuariosService.findOne(id);
  }

  @SubscribeMessage('updateUsuario')
  update(@MessageBody() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(updateUsuarioDto.id, updateUsuarioDto);
  }

  @SubscribeMessage('removeUsuario')
  remove(@MessageBody() id: number) {
    return this.usuariosService.remove(id);
  }
}
