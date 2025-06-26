import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TranssaccionPago } from './entities/transsaccion-pago.entity';
import { CreateTranssaccionPagoDto } from './dto/create-transsaccion-pago.dto';
import { UpdateTranssaccionPagoDto } from './dto/update-transsaccion-pago.dto';

@Injectable()
export class TranssaccionPagoService {
  constructor(
    @InjectRepository(TranssaccionPago)
    private transsaccionPagoRepository: Repository<TranssaccionPago>,
  ) {}
  create(createTranssaccionPagoDto: CreateTranssaccionPagoDto) {
    const transsaccionPago = this.transsaccionPagoRepository.create(createTranssaccionPagoDto);
    return this.transsaccionPagoRepository.save(transsaccionPago);
  }

  findAll() {
    return this.transsaccionPagoRepository.find({
    });
  }

  findOne(id: number) {
    return this.transsaccionPagoRepository.findOne({ where: { id } });
  }

  update(id: number, updateTranssaccionPagoDto: UpdateTranssaccionPagoDto) {
    return this.transsaccionPagoRepository.update(id, updateTranssaccionPagoDto);
  }

  remove(id: number) {
    return this.transsaccionPagoRepository.delete(id)
    
  }
}
