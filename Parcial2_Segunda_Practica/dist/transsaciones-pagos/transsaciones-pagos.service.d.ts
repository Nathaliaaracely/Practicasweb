import { CreateTranssacionesPagoInput } from './dto/create-transsaciones-pago.input';
import { UpdateTranssacionesPagoInput } from './dto/update-transsaciones-pago.input';
import { TranssacionesPago } from './entities/transsaciones-pago.entity';
import { Repository } from 'typeorm';
export declare class TranssacionesPagosService {
    private readonly transsacionesPagosRepository;
    constructor(transsacionesPagosRepository: Repository<TranssacionesPago>);
    create(createTranssacionesPagoInput: CreateTranssacionesPagoInput): Promise<TranssacionesPago>;
    findAll(): Promise<TranssacionesPago[]>;
    findOne(id: string): Promise<TranssacionesPago | null>;
    update(id: string, updateTranssacionesPagoInput: UpdateTranssacionesPagoInput): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
