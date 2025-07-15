import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { ReceptoresService } from './receptores.service';
import { CreateReceptoreDto } from './dto/create-receptore.dto';
import { UpdateReceptoreDto } from './dto/update-receptore.dto';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ReceptoresGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly receptoresService: ReceptoresService) {}

  @SubscribeMessage('createReceptore')
  async create(@MessageBody() createReceptoreDto: CreateReceptoreDto) {
    const receptore = await this.receptoresService.create(createReceptoreDto);
    this.server.emit('receptoreCreated', receptore);
    return receptore;
  }

  @SubscribeMessage('findAllReceptores')
  findAll() {
    return this.receptoresService.findAll();
  }

  @SubscribeMessage('findOneReceptore')
  async findOne(@MessageBody() id: number) {
    return await this.receptoresService.findOne(id);
  }

  @SubscribeMessage('updateReceptore')
  async update(@MessageBody() updateReceptoreDto: UpdateReceptoreDto) {
    const receptore = await this.receptoresService.update(updateReceptoreDto.id, updateReceptoreDto);
    this.server.emit('receptoreUpdated', receptore);
    return receptore;
  }

  @SubscribeMessage('removeReceptore')
  async remove(@MessageBody() id: number) {
    await this.receptoresService.remove(id);
    this.server.emit('receptoreRemoved', id);
  }
}
