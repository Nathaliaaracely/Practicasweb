import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { PagosService } from './pagos.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';

@WebSocketGateway()
export class PagosGateway {
  constructor(private readonly pagosService: PagosService) {}

  @SubscribeMessage('createPago')
  create(@MessageBody() createPagoDto: CreatePagoDto) {
    return this.pagosService.create(createPagoDto);
  }

  @SubscribeMessage('findAllPagos')
  findAll() {
    return this.pagosService.findAll();
  }

  @SubscribeMessage('findOnePago')
  findOne(@MessageBody() id: number) {
    return this.pagosService.findOne(id);
  }

  @SubscribeMessage('updatePago')
  update(@MessageBody() updatePagoDto: UpdatePagoDto) {
    return this.pagosService.update(updatePagoDto.id, updatePagoDto);
  }

  @SubscribeMessage('removePago')
  remove(@MessageBody() id: number) {
    return this.pagosService.remove(id);
  }
}
