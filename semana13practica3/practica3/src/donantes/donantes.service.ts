import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Donante } from './entities/donante.entity';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';

@Injectable()
export class DonantesService {
  constructor(
    @InjectRepository(Donante)
    private readonly repo: Repository<Donante>,
  ) {}

  async create(dto: CreateDonanteDto): Promise<Donante> {
    const nuevo = this.repo.create(dto);
    return await this.repo.save(nuevo);
  }

  async findAll(): Promise<Donante[]> {
    return await this.repo.find();
  }

  async findOne(id: number): Promise<Donante> {
    const donante = await this.repo.findOneBy({ id });
    if (!donante) {
      throw new NotFoundException(`Donante con ID ${id} no encontrado`);
    }
    return donante;
  }

  async update(id: number, dto: UpdateDonanteDto): Promise<Donante> {
    await this.repo.update(id, dto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
