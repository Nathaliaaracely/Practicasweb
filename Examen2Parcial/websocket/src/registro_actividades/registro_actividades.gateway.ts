import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { RegistroActividadesService } from './registro_actividades.service';
import { CreateRegistroActividadeDto } from './dto/create-registro_actividade.dto';
import { UpdateRegistroActividadeDto } from './dto/update-registro_actividade.dto';

@WebSocketGateway()
export class RegistroActividadesGateway {
  constructor(private readonly registroActividadesService: RegistroActividadesService) {}

  @SubscribeMessage('createRegistroActividade')
  create(@MessageBody() createRegistroActividadeDto: CreateRegistroActividadeDto) {
    return this.registroActividadesService.create(createRegistroActividadeDto);
  }

  @SubscribeMessage('findAllRegistroActividades')
  findAll() {
    return this.registroActividadesService.findAll();
  }

  @SubscribeMessage('findOneRegistroActividade')
  findOne(@MessageBody() id: number) {
    return this.registroActividadesService.findOne(id);
  }

  @SubscribeMessage('updateRegistroActividade')
  update(@MessageBody() updateRegistroActividadeDto: UpdateRegistroActividadeDto) {
    return this.registroActividadesService.update(updateRegistroActividadeDto.id, updateRegistroActividadeDto);
  }

  @SubscribeMessage('removeRegistroActividade')
  remove(@MessageBody() id: number) {
    return this.registroActividadesService.remove(id);
  }
}
