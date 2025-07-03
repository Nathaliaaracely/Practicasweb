import { ProductosDonacionesService } from './productos-donaciones.service';
import { ProductosDonaciones } from './entities/productos-donacione.entity';
import { CreateProductosDonacionesInput } from './dto/create-productos-donacione.input';
import { UpdateProductosDonacionesInput } from './dto/update-productos-donacione.input';
export declare class ProductosDonacionesResolver {
    private readonly productosDonacionesService;
    constructor(productosDonacionesService: ProductosDonacionesService);
    createProductosDonacione(createProductosDonacioneInput: CreateProductosDonacionesInput): Promise<ProductosDonaciones>;
    findAll(): Promise<ProductosDonaciones[]>;
    findOne(id: string): Promise<ProductosDonaciones | null>;
    updateProductosDonacione(updateProductosDonacioneInput: UpdateProductosDonacionesInput): Promise<import("typeorm").UpdateResult>;
    removeProductosDonacione(id: number): Promise<import("typeorm").DeleteResult>;
}
