import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEntradaInput } from './dto/create-entrada.input';
import { UpdateEntradaInput } from './dto/update-entrada.input';
import { JsonStorageService } from '../storage/json-storage.service';
import { Entrada } from './entities/entrada.entity';

@Injectable()
export class EntradaService {
  constructor(
    @Inject('EntradasStorage')
    private readonly storageService: JsonStorageService<Entrada>,
  ) {}

  async create(createEntradaInput: CreateEntradaInput): Promise<Entrada> {
    return this.storageService.create(createEntradaInput);
  }

  async findAll(): Promise<Entrada[]> {
    return this.storageService.findAll();
  }

  async findOne(id: string): Promise<Entrada> {
    const entrada = await this.storageService.findOne(id);
    if (!entrada) {
      throw new NotFoundException(`Entrada con ID "${id}" no encontrada`);
    }
    return entrada;
  }

  async update(id: string, updateEntradaInput: UpdateEntradaInput): Promise<Entrada> {
    const entradaActualizada = await this.storageService.update(id, updateEntradaInput);
    if (!entradaActualizada) {
      throw new NotFoundException(`Entrada con ID "${id}" no encontrada`);
    }
    return entradaActualizada;
  }

  async remove(id: string): Promise<Entrada> {
    const entrada = await this.findOne(id);
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`No se pudo eliminar la entrada con ID "${id}"`);
    }
    return entrada;
  }
}
