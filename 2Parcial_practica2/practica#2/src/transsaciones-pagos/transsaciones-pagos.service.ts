import { Injectable } from '@nestjs/common';
import { CreateTranssacionesPagoInput } from './dto/create-transsaciones-pago.input';
import { UpdateTranssacionesPagoInput } from './dto/update-transsaciones-pago.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TranssacionesPago } from './entities/transsaciones-pago.entity';

@Injectable()
export class TranssacionesPagosService {
constructor(
  @InjectRepository(TranssacionesPago)
  private readonly transsacionesPagosRepository: Repository<TranssacionesPago>,
) {}  

  create(createTranssacionesPagoInput: CreateTranssacionesPagoInput) {
    const transsacionesPago = this.transsacionesPagosRepository.create(createTranssacionesPagoInput);
    return this.transsacionesPagosRepository.save(transsacionesPago);
  }

  findAll() {
    return this.transsacionesPagosRepository.find();
  }

  findOne(id: string) {
    return this.transsacionesPagosRepository.findOne({ where: { id } });
  }

  update(id: string, updateTranssacionesPagoInput: UpdateTranssacionesPagoInput) {
    return this.transsacionesPagosRepository.update(id, updateTranssacionesPagoInput);
  }

  remove(id: string) {
    return this.transsacionesPagosRepository.delete(id);
  }
}
