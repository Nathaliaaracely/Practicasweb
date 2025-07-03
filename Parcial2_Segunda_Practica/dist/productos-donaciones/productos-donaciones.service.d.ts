import { CreateProductosDonacionesInput } from './dto/create-productos-donacione.input';
import { UpdateProductosDonacionesInput } from './dto/update-productos-donacione.input';
import { ProductosDonaciones } from './entities/productos-donacione.entity';
import { Repository } from 'typeorm';
export declare class ProductosDonacionesService {
    private readonly productosDonacionesRepository;
    constructor(productosDonacionesRepository: Repository<ProductosDonaciones>);
    create(createProductosDonacionesInput: CreateProductosDonacionesInput): Promise<ProductosDonaciones>;
    findAll(): Promise<ProductosDonaciones[]>;
    findOne(id: string): Promise<ProductosDonaciones | null>;
    update(id: string, UpdateProductosDonacionesInput: UpdateProductosDonacionesInput): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
