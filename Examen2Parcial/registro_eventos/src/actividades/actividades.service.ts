import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
import { Actividade } from './entities/actividade.entity';
import { JsonStorageService } from '../storage/json-storage.service';
import { randomUUID } from 'crypto';

@Injectable()
export class ActividadesService {
  constructor(
    @Inject('ActividadesStorage')
    private readonly storageService: JsonStorageService<Actividade>,
  ) {}

  async create(createActividadeDto: CreateActividadeDto) {
    const actividadToCreate = {
      id: randomUUID(),
      ...createActividadeDto,
      fechaInicio: new Date(createActividadeDto.fechainicio),
      fechaFin: new Date(createActividadeDto.fechafin),
    };
    return this.storageService.create(actividadToCreate);
  }

  async findAll() {
    return this.storageService.findAll();
  }

  async findOne(id: string) {
    const actividad = await this.storageService.findOne(id);
    if (!actividad) {
      throw new NotFoundException(`Actividad con ID "${id}" no encontrada`);
    }
    return actividad;
  }

  async update(id: string, updateActividadeDto: UpdateActividadeDto) {
    const actividadActualizada = await this.storageService.update(
      id,
      updateActividadeDto,
    );
    if (!actividadActualizada) {
      throw new NotFoundException(`Actividad con ID "${id}" no encontrada`);
    }
    return actividadActualizada;
  }

  async remove(id: string) {
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`Actividad con ID "${id}" no encontrada`);
    }
    return { message: `Actividad con ID "${id}" eliminada` };
  }
}
