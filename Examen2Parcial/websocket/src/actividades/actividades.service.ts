import { Injectable } from '@nestjs/common';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
import { Actividade } from './entities/actividade.entity';
import { JsonStorageService } from '../storage/json-storage.service';
import { Inject } from '@nestjs/common';
import { randomUUID } from 'crypto';


@Injectable()
export class ActividadesService {
  constructor(
  @Inject('ActividadesStorage')
    private readonly storageService: JsonStorageService<Actividade>,
  ) {}
  create(createActividadeDto: CreateActividadeDto) {
    const actividadToCreate = {
      id: createActividadeDto.id || randomUUID(),
      ...createActividadeDto,
      fechainicio: new Date(createActividadeDto.fechainicio),
      fechafin: new Date(createActividadeDto.fechafin),
    };
    return this.storageService.create(actividadToCreate);
  }

  findAll() {
    return this.storageService.findAll();
  }

  findOne(id: string) {
    return this.storageService.findOne(id);
  }

  update(id: string, updateActividadeDto: UpdateActividadeDto) {
    return this.storageService.update(id, updateActividadeDto);
  }

  remove(id: string) {
    return this.storageService.remove(id);
  }
}
