import { Injectable } from '@nestjs/common';
import { CreateDonacioneInput } from './dto/create-donacione.input';
import { UpdateDonacioneInput } from './dto/update-donacione.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donacione } from './entities/donacione.entity';

@Injectable()
export class DonacionesService {
  constructor(
    @InjectRepository(Donacione)
    private readonly donacionesRepository: Repository<Donacione>,
  ) {}

  create(createDonacioneInput: CreateDonacioneInput) {
    return this.donacionesRepository.save(createDonacioneInput);
  }

  findAll() {
    return this.donacionesRepository.find();
  }

  findOne(id: string) {
    return this.donacionesRepository.findOneBy({ id });
  }

  update(id: string, updateDonacioneInput: UpdateDonacioneInput) {
    return this.donacionesRepository.update(id, updateDonacioneInput);
  }

  remove(id: string) {
    return this.donacionesRepository.delete(id);
  }
}
