import { Injectable } from '@nestjs/common';
import { CreateRegistroActividadeDto } from './dto/create-registro_actividade.dto';
import { UpdateRegistroActividadeDto } from './dto/update-registro_actividade.dto';

@Injectable()
export class RegistroActividadesService {
  create(createRegistroActividadeDto: CreateRegistroActividadeDto) {
    return 'This action adds a new registroActividade';
  }

  findAll() {
    return `This action returns all registroActividades`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroActividade`;
  }

  update(id: number, updateRegistroActividadeDto: UpdateRegistroActividadeDto) {
    return `This action updates a #${id} registroActividade`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroActividade`;
  }
}
