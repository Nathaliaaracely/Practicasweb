import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagoInput } from './dto/create-pago.input';
import { UpdatePagoInput } from './dto/update-pago.input';
import { JsonStorageService } from '../storage/json-storage.service';
import { Pago } from './entities/pago.entity';

@Injectable()
export class PagosService {
  constructor(
    @Inject('PagosStorage')
    private readonly storageService: JsonStorageService<Pago>,
  ) {}

  async create(createPagoInput: CreatePagoInput): Promise<Pago> {
    return this.storageService.create(createPagoInput);
  }

  async findAll(): Promise<Pago[]> {
    return this.storageService.findAll();
  }

  async findOne(id: string): Promise<Pago> {
    const pago = await this.storageService.findOne(id);
    if (!pago) {
      throw new NotFoundException(`Pago con ID "${id}" no encontrado`);
    }
    return pago;
  }

  async update(id: string, updatePagoInput: UpdatePagoInput): Promise<Pago> {
    const pagoActualizado = await this.storageService.update(id, updatePagoInput);
    if (!pagoActualizado) {
      throw new NotFoundException(`Pago con ID "${id}" no encontrado`);
    }
    return pagoActualizado;
  }

  async remove(id: string): Promise<Pago> {
    const pago = await this.findOne(id);
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`No se pudo eliminar el pago con ID "${id}"`);
    }
    return pago;
  }
}
