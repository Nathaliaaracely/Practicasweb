import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { UpdateEntradaDto } from './dto/update-entrada.dto';
import { Entrada } from './entities/entrada.entity';
import { JsonStorageService } from '../storage/json-storage.service';

@Injectable()
export class EntradaService {
  constructor(
    @Inject('EntradasStorage')
    private readonly storageService: JsonStorageService<Entrada>,
  ) {}

  async create(createEntradaDto: CreateEntradaDto) {
    const entradaToCreate = {
      ...createEntradaDto,
      fecha_adquirida: new Date(createEntradaDto.fecha_adquirida),
    };
    return this.storageService.create(entradaToCreate);
  }

  async findAll() {
    return this.storageService.findAll();
  }

  async findOne(id: string) {
    const entrada = await this.storageService.findOne(id);
    if (!entrada) {
      throw new NotFoundException(`Entrada con ID "${id}" no encontrada`);
    }
    return entrada;
  }

  async update(id: string, updateEntradaDto: UpdateEntradaDto) {
    const entradaActualizada = await this.storageService.update(id, updateEntradaDto);
    if (!entradaActualizada) {
      throw new NotFoundException(`Entrada con ID "${id}" no encontrada`);
    }
    return entradaActualizada;
  }

  async remove(id: string) {
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`Entrada con ID "${id}" no encontrada`);
    }
    return { message: `Entrada con ID "${id}" eliminada` };
  }
}
