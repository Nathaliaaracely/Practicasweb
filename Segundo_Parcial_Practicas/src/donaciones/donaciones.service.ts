import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donaciones } from './entities/donacione.entity';
import { CreateDonacioneDto } from './dto/create-donacione.dto';
import { UpdateDonacioneDto } from './dto/update-donacione.dto';

@Injectable()
export class DonacionesService {
  constructor(
    @InjectRepository(Donaciones)
    private donacionesRepository: Repository<Donaciones>,
  ) {}
  create(createDonacioneDto: CreateDonacioneDto) {
    const donacion = this.donacionesRepository.create(createDonacioneDto);
    return this.donacionesRepository.save(donacion);
  }

  findAll() {
    return this.donacionesRepository.find({
      relations: ['productosDonaciones'], // Assuming you want to load the related 'productosDonaciones' entity
    });
    
  }

  findOne(id: number) {
    return this.donacionesRepository.findOneBy({ id });
  }

  update(id: number, updateDonacioneDto: UpdateDonacioneDto) {
    return this.donacionesRepository.update(id, updateDonacioneDto)
      .then(() => this.findOne(id));
  }

  remove(id: number) {
    return this.donacionesRepository.delete(id)
      .then(() => ({ message: 'Donación eliminada exitosamente' }));
  }
}
