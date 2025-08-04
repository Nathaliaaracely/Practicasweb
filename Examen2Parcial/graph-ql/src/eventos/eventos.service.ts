import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoInput } from './dto/create-evento.input';
import { UpdateEventoInput } from './dto/update-evento.input';
import { JsonStorageService } from '../storage/json-storage.service';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventosService {
  constructor(
    @Inject('EventosStorage')
    private readonly storageService: JsonStorageService<Evento>,
  ) {}

  async create(createEventoInput: CreateEventoInput): Promise<Evento> {
    return this.storageService.create(createEventoInput);
  }

  async findAll(): Promise<Evento[]> {
    return this.storageService.findAll();
  }

  async findOne(id: string): Promise<Evento> {
    const evento = await this.storageService.findOne(id);
    if (!evento) {
      throw new NotFoundException(`Evento con ID "${id}" no encontrado`);
    }
    return evento;
  }

  async update(id: string, updateEventoInput: UpdateEventoInput): Promise<Evento> {
    const eventoActualizado = await this.storageService.update(id, updateEventoInput);
    if (!eventoActualizado) {
      throw new NotFoundException(`Evento con ID "${id}" no encontrado`);
    }
    return eventoActualizado;
  }

  async remove(id: string): Promise<Evento> {
    const evento = await this.findOne(id);
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`No se pudo eliminar el evento con ID "${id}"`);
    }
    return evento;
  }
}
