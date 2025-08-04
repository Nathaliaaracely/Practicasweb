import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { EntradaService } from './entrada.service';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';

@WebSocketGateway()
export class EntradaGateway {
  constructor(private readonly entradaService: EntradaService) {}

  @SubscribeMessage('createEntrada')
  create(@MessageBody() createEntradaDto: CreateEntradaDto) {
    return this.entradaService.create(createEntradaDto);
  }

  @SubscribeMessage('findAllEntrada')
  findAll() {
    return this.entradaService.findAll();
  }

  @SubscribeMessage('findOneEntrada')
  findOne(@MessageBody() id: number) {
    return this.entradaService.findOne(id);
  }

  @SubscribeMessage('updateEntrada')
  update(@MessageBody() updateEntradaDto: UpdateEntradaDto) {
    return this.entradaService.update(updateEntradaDto.id, updateEntradaDto);
  }

  @SubscribeMessage('removeEntrada')
  remove(@MessageBody() id: number) {
    return this.entradaService.remove(id);
  }
}
