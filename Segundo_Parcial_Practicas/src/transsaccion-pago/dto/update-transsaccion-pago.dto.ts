import { PartialType } from '@nestjs/mapped-types';
import { CreateTranssaccionPagoDto } from './create-transsaccion-pago.dto';

export class UpdateTranssaccionPagoDto extends PartialType(CreateTranssaccionPagoDto) {}
