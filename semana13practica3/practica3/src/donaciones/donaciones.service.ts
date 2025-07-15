import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donacione } from './entities/donacione.entity';
import { CreateDonacioneDto } from './dto/create-donacione.dto';
import { UpdateDonacioneDto } from './dto/update-donacione.dto';

@Injectable()
export class DonacionesService {
  constructor(
    @InjectRepository(Donacione)
    private readonly repo: Repository<Donacione>,
  ) {}

  async create(dto: CreateDonacioneDto): Promise<Donacione> {
    const nueva = this.repo.create(dto);
    return await this.repo.save(nueva);
  }

  async findAll(): Promise<Donacione[]> {
    return await this.repo.find();
  }

  async findOne(id: number): Promise<Donacione> {
    const donacion = await this.repo.findOneBy({ id });
    if (!donacion) {
      throw new NotFoundException(`Donación con ID ${id} no encontrada`);
    }
    return donacion;
  }

  async update(id: number, dto: UpdateDonacioneDto): Promise<Donacione> {
    await this.repo.update(id, dto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
