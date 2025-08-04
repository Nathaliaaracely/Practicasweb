import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Evento } from './entities/evento.entity';
import { JsonStorageService } from '../storage/json-storage.service';
import { Inject } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class EventosService {
  constructor(
    @Inject(JsonStorageService)
    private readonly storageService: JsonStorageService<Evento>,
  ) {}

  create(createEventoDto: CreateEventoDto) {
    return this.storageService.create({
      id: createEventoDto.id || randomUUID(),
      nombre: createEventoDto.nombre,
      descripcion: createEventoDto.descripcion,
      fechainicio: createEventoDto.fechainicio,
      fechafin: createEventoDto.fechafin,
    });
  }

  findAll() {
    return this.storageService.findAll();
  }

  findOne(id: string) {
    return this.storageService.findOne(id);
  }

  update(id: string, updateEventoDto: UpdateEventoDto) {
    return this.storageService.update(id, updateEventoDto);
  }

  remove(id: string) {
    return this.storageService.remove(id);
  }
}
