import { Injectable } from '@nestjs/common';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { Entrada } from './entities/entrada.entity';
import { JsonStorageService } from '../storage/json-storage.service';
import { Inject } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class EntradaService {
  constructor(
    @Inject('EntradasStorage')
    private readonly storageService: JsonStorageService<Entrada>,
  ) {}

  create(createEntradaDto: CreateEntradaDto) {
    return this.storageService.create({
      id: randomUUID(),
      usuarioId: createEntradaDto.usuarioId,
      tipo_entradaid: createEntradaDto.tipo_entradaid,
      eventoId: createEntradaDto.eventoId,
      pago: createEntradaDto.pago,
      fecha_adquirida: new Date(createEntradaDto.fecha_adquirida),
    });
  }

  findAll() {
    return this.storageService.findAll();
  }

  findOne(id: number) {
    return this.storageService.findOne(id);
  }

  update(id: number, updateEntradaDto: UpdateEntradaDto) {
    return this.storageService.update(id, updateEntradaDto);
  }

  remove(id: number) {
    return this.storageService.remove(id);
  }
}
