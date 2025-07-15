import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { DonacionesService } from './donaciones.service';

@WebSocketGateway({ cors: true })
export class DonacionesGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly service: DonacionesService) {}

  @SubscribeMessage('createDonacion')
  async create(@MessageBody() dto: any) {
    const nueva = await this.service.create(dto);
    const todas = await this.service.findAll();
    this.server.emit('donacionCreated', todas);
    return nueva;
  }

  @SubscribeMessage('findDonaciones')
  async findAll() {
    return await this.service.findAll();
  }

  @SubscribeMessage('findDonacion')
  async findOne(@MessageBody() id: number) {
    return await this.service.findOne(id);
  }

  @SubscribeMessage('updateDonacion')
  async update(@MessageBody() data: { id: number; dto: any }) {
    const actualizada = await this.service.update(data.id, data.dto);
    const todas = await this.service.findAll();
    this.server.emit('donacionUpdated', todas);
    return actualizada;
  }

  @SubscribeMessage('removeDonacion')
  async remove(@MessageBody() id: number) {
    await this.service.remove(id);
    const todas = await this.service.findAll();
    this.server.emit('donacionRemoved', todas);
    return { success: true };
  }
}
