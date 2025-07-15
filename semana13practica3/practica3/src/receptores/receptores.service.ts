import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReceptoreDto } from './dto/create-receptore.dto';
import { UpdateReceptoreDto } from './dto/update-receptore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receptore } from './entities/receptore.entity';

@Injectable()
export class ReceptoresService {
 constructor(
   @InjectRepository(Receptore)
   private receptoreRepository: Repository<Receptore>,
 ) {}

 async create(createReceptoreDto: CreateReceptoreDto): Promise<Receptore> {
   const receptore = this.receptoreRepository.create(createReceptoreDto);
   return await this.receptoreRepository.save(receptore);
 }

  async findAll(): Promise<Receptore[]> {
    return await this.receptoreRepository.find();
  }

 async findOne(id: number): Promise<Receptore> {
   const receptore = await this.receptoreRepository.findOneBy({ id });
   if (!receptore) {
     throw new NotFoundException(`Receptore with ID ${id} not found`);
   }
   return receptore;
 }

 async update(id: number, updateReceptoreDto: UpdateReceptoreDto): Promise<Receptore> {
   const receptore = await this.findOne(id);
   this.receptoreRepository.merge(receptore, updateReceptoreDto);
   return await this.receptoreRepository.save(receptore);
 }

 async remove(id: number): Promise<void> {
   const receptore = await this.findOne(id);
   await this.receptoreRepository.remove(receptore);
 }
}