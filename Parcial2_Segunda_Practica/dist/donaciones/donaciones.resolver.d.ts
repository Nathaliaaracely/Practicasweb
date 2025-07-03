import { DonacionesService } from './donaciones.service';
import { Donaciones } from './entities/donacione.entity';
import { CreateDonacioneInput } from './dto/create-donacione.input';
import { UpdateDonacioneInput } from './dto/update-donacione.input';
export declare class DonacionesResolver {
    private readonly donacionesService;
    constructor(donacionesService: DonacionesService);
    createDonacione(createDonacioneInput: CreateDonacioneInput): Promise<Donaciones>;
    findAll(): Promise<Donaciones[]>;
    findOne(id: string): Promise<Donaciones | null>;
    updateDonacione(updateDonacioneInput: UpdateDonacioneInput): Promise<import("typeorm").UpdateResult>;
    removeDonacione(id: string): Promise<import("typeorm").DeleteResult>;
}
