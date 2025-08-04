import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegistroActividadeInput } from './dto/create-registro_actividade.input';
import { UpdateRegistroActividadeInput } from './dto/update-registro_actividade.input';
import { JsonStorageService } from '../storage/json-storage.service';
import { RegistroActividade } from './entities/registro_actividade.entity';

@Injectable()
export class RegistroActividadesService {
  constructor(
    @Inject('RegistroActividadesStorage')
    private readonly storageService: JsonStorageService<RegistroActividade>,
  ) {}

  async create(
    createRegistroActividadeInput: CreateRegistroActividadeInput,
  ): Promise<RegistroActividade> {
    return this.storageService.create(createRegistroActividadeInput);
  }

  async findAll(): Promise<RegistroActividade[]> {
    return this.storageService.findAll();
  }

  async findOne(id: string): Promise<RegistroActividade> {
    const registro = await this.storageService.findOne(id);
    if (!registro) {
      throw new NotFoundException(`Registro con ID "${id}" no encontrado`);
    }
    return registro;
  }

  async update(
    id: string,
    updateRegistroActividadeInput: UpdateRegistroActividadeInput,
  ): Promise<RegistroActividade> {
    const registroActualizado = await this.storageService.update(
      id,
      updateRegistroActividadeInput,
    );
    if (!registroActualizado) {
      throw new NotFoundException(`Registro con ID "${id}" no encontrado`);
    }
    return registroActualizado;
  }

  async remove(id: string): Promise<RegistroActividade> {
    const registro = await this.findOne(id);
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`No se pudo eliminar el registro con ID "${id}"`);
    }
    return registro;
  }
}
