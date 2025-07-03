import { TranssacionesPagosService } from './transsaciones-pagos.service';
import { TranssacionesPago } from './entities/transsaciones-pago.entity';
import { CreateTranssacionesPagoInput } from './dto/create-transsaciones-pago.input';
import { UpdateTranssacionesPagoInput } from './dto/update-transsaciones-pago.input';
export declare class TranssacionesPagosResolver {
    private readonly transsacionesPagosService;
    constructor(transsacionesPagosService: TranssacionesPagosService);
    createTranssacionesPago(createTranssacionesPagoInput: CreateTranssacionesPagoInput): Promise<TranssacionesPago>;
    findAll(): Promise<TranssacionesPago[]>;
    findOne(id: string): Promise<TranssacionesPago | null>;
    updateTranssacionesPago(updateTranssacionesPagoInput: UpdateTranssacionesPagoInput): Promise<import("typeorm").UpdateResult>;
    removeTranssacionesPago(id: string): Promise<import("typeorm").DeleteResult>;
}
