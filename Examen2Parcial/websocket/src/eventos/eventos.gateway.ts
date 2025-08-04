import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@WebSocketGateway()
export class EventosGateway {
  constructor(private readonly eventosService: EventosService) {}

  @SubscribeMessage('createEvento')
  create(@MessageBody() createEventoDto: CreateEventoDto) {
    return this.eventosService.create(createEventoDto);
  }

  @SubscribeMessage('findAllEventos')
  findAll() {
    return this.eventosService.findAll();
  }

  @SubscribeMessage('findOneEvento')
  findOne(@MessageBody() id: number) {
    return this.eventosService.findOne(id);
  }

  @SubscribeMessage('updateEvento')
  update(@MessageBody() updateEventoDto: UpdateEventoDto) {
    return this.eventosService.update(updateEventoDto.id, updateEventoDto);
  }

  @SubscribeMessage('removeEvento')
  remove(@MessageBody() id: number) {
    return this.eventosService.remove(id);
  }
}
