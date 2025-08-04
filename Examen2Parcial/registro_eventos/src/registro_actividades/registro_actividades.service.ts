import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegistroActividadeDto } from './dto/create-registro_actividade.dto';
import { UpdateRegistroActividadeDto } from './dto/update-registro_actividade.dto';
import { RegistroActividade } from './entities/registro_actividade.entity';
import { JsonStorageService } from '../storage/json-storage.service';

@Injectable()
export class RegistroActividadesService {
  constructor(
    @Inject('RegistroActividadesStorage')
    private readonly storageService: JsonStorageService<RegistroActividade>,
  ) {}

  async create(createRegistroActividadeDto: CreateRegistroActividadeDto) {
    return this.storageService.create(createRegistroActividadeDto);
  }

  async findAll() {
    return this.storageService.findAll();
  }

  async findOne(id: string) {
    const registro = await this.storageService.findOne(id);
    if (!registro) {
      throw new NotFoundException(`Registro de actividad con ID "${id}" no encontrado`);
    }
    return registro;
  }

  async update(id: string, updateRegistroActividadeDto: UpdateRegistroActividadeDto) {
    const registroActualizado = await this.storageService.update(
      id,
      updateRegistroActividadeDto,
    );
    if (!registroActualizado) {
      throw new NotFoundException(`Registro de actividad con ID "${id}" no encontrado`);
    }
    return registroActualizado;
  }

  async remove(id: string) {
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`Registro de actividad con ID "${id}" no encontrado`);
    }
    return { message: `Registro de actividad con ID "${id}" eliminado` };
  }
}
