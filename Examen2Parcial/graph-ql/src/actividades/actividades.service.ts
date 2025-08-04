import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateActividadeInput } from './dto/create-actividade.input';
import { UpdateActividadeInput } from './dto/update-actividade.input';
import { JsonStorageService } from '../storage/json-storage.service';
import { Actividade } from './entities/actividade.entity';

@Injectable()
export class ActividadesService {
  constructor(
    @Inject('ActividadesStorage')
    private readonly storageService: JsonStorageService<Actividade>,
  ) {}

  async create(createActividadeInput: CreateActividadeInput): Promise<Actividade> {
    const { nombre, tipo, descripcion, fechaInicio, fechaFin } = createActividadeInput as any;
    return this.storageService.create({
      nombre,
      tipo,
      descripcion,
      fechaInicio,
      fechaFin,
    });
  }

  async findAll(): Promise<Actividade[]> {
    return this.storageService.findAll();
  }

  async findOne(id: string): Promise<Actividade> {
    const actividade = await this.storageService.findOne(id);
    if (!actividade) {
      throw new NotFoundException(`Actividad con ID "${id}" no encontrada`);
    }
    return actividade;
  }

  async update(id: string, updateActividadeInput: UpdateActividadeInput): Promise<Actividade> {
    const actividadeActualizada = await this.storageService.update(id, updateActividadeInput);
    if (!actividadeActualizada) {
      throw new NotFoundException(`Actividad con ID "${id}" no encontrada`);
    }
    return actividadeActualizada;
  }

  async remove(id: string): Promise<Actividade> {
    const actividade = await this.findOne(id);
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`No se pudo eliminar la actividad con ID "${id}"`);
    }
    return actividade;
  }
}
