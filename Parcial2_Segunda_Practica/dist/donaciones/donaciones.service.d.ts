import { CreateDonacioneInput } from './dto/create-donacione.input';
import { UpdateDonacioneInput } from './dto/update-donacione.input';
import { Repository } from 'typeorm';
import { Donaciones } from './entities/donacione.entity';
export declare class DonacionesService {
    private readonly donacionesRepository;
    constructor(donacionesRepository: Repository<Donaciones>);
    create(createDonacionesInput: CreateDonacioneInput): Promise<Donaciones>;
    findAll(): Promise<Donaciones[]>;
    findOne(id: string): Promise<Donaciones | null>;
    update(id: string, updateDonacioneInput: UpdateDonacioneInput): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
