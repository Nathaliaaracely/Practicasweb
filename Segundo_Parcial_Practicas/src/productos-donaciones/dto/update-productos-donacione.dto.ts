import { PartialType } from '@nestjs/mapped-types';
import { CreateProductosDonacioneDto } from './create-productos-donacione.dto';

export class UpdateProductosDonacioneDto extends PartialType(CreateProductosDonacioneDto) {}
