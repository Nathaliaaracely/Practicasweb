import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ActividadesService } from './actividades.service';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';

@WebSocketGateway()
export class ActividadesGateway {
  constructor(private readonly actividadesService: ActividadesService) {}

  @SubscribeMessage('createActividade')
  create(@MessageBody() createActividadeDto: CreateActividadeDto) {
    return this.actividadesService.create(createActividadeDto);
  }

  @SubscribeMessage('findAllActividades')
  findAll() {
    return this.actividadesService.findAll();
  }

  @SubscribeMessage('findOneActividade')
  findOne(@MessageBody() id: string) {
    return this.actividadesService.findOne(id);
  }

  @SubscribeMessage('updateActividade')
  update(@MessageBody() updateActividadeDto: UpdateActividadeDto) {
    return this.actividadesService.update(updateActividadeDto.id, updateActividadeDto);
  }

  @SubscribeMessage('removeActividade')
  remove(@MessageBody() id: number) {
    return this.actividadesService.remove(id);
  }
}
