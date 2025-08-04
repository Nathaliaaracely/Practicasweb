import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Pago } from './entities/pago.entity';
import { JsonStorageService } from '../storage/json-storage.service';

@Injectable()
export class PagosService {
  constructor(
    @Inject('PagosStorage')
    private readonly storageService: JsonStorageService<Pago>,
  ) {}

  async create(createPagoDto: CreatePagoDto) {
    const pagoToCreate = {
      ...createPagoDto,
      fechaPago: new Date(createPagoDto.fechaPago),
    };
    return this.storageService.create(pagoToCreate);
  }

  async findAll() {
    return this.storageService.findAll();
  }

  async findOne(id: string) {
    const pago = await this.storageService.findOne(id);
    if (!pago) {
      throw new NotFoundException(`Pago con ID "${id}" no encontrado`);
    }
    return pago;
  }

  async update(id: string, updatePagoDto: UpdatePagoDto) {
    const pagoActualizado = await this.storageService.update(id, updatePagoDto);
    if (!pagoActualizado) {
      throw new NotFoundException(`Pago con ID "${id}" no encontrado`);
    }
    return pagoActualizado;
  }

  async remove(id: string) {
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`Pago con ID "${id}" no encontrado`);
    }
    return { message: `Pago con ID "${id}" eliminado` };
  }
}
