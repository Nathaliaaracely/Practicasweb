import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { DonantesService } from './donantes.service';

@WebSocketGateway({ cors: true })
export class DonantesGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly service: DonantesService) {}

  @SubscribeMessage('createDonante')
  async create(@MessageBody() dto: any) {
    const nuevo = await this.service.create(dto);
    const todos = await this.service.findAll();
    this.server.emit('donanteCreated', todos);
    return nuevo;
  }

  @SubscribeMessage('findDonantes')
  async findAll() {
    return await this.service.findAll();
  }

  @SubscribeMessage('findDonante')
  async findOne(@MessageBody() id: number) {
    return await this.service.findOne(id);
  }

  @SubscribeMessage('updateDonante')
  async update(@MessageBody() data: { id: number; dto: any }) {
    const actualizado = await this.service.update(data.id, data.dto);
    const todos = await this.service.findAll();
    this.server.emit('donanteUpdated', todos);
    return actualizado;
  }

  @SubscribeMessage('removeDonante')
  async remove(@MessageBody() id: number) {
    await this.service.remove(id);
    const todos = await this.service.findAll();
    this.server.emit('donanteRemoved', todos);
    return { success: true };
  }
}
