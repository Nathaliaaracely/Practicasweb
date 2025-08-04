import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';
import { JsonStorageService } from '../storage/json-storage.service';

@Injectable()
export class EventosService {
  constructor(
    @Inject('EventosStorage')
    private readonly storageService: JsonStorageService<Evento>,
  ) {}

  async create(createEventoDto: CreateEventoDto) {
    const eventoToCreate = {
        ...createEventoDto,
        fechainicio: new Date(createEventoDto.fechainicio),
        fechafin: new Date(createEventoDto.fechafin),
    };
    return this.storageService.create(eventoToCreate);
  }

  async findAll() {
    return this.storageService.findAll();
  }

  async findOne(id: string) {
    const evento = await this.storageService.findOne(id);
    if (!evento) {
      throw new NotFoundException(`Evento con ID "${id}" no encontrado`);
    }
    return evento;
  }

  async update(id: string, updateEventoDto: UpdateEventoDto) {
    const eventoActualizado = await this.storageService.update(id, updateEventoDto);
    if (!eventoActualizado) {
      throw new NotFoundException(`Evento con ID "${id}" no encontrado`);
    }
    return eventoActualizado;
  }

  async remove(id: string) {
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`Evento con ID "${id}" no encontrado`);
    }
    return { message: `Evento con ID "${id}" eliminado` };
  }
}
