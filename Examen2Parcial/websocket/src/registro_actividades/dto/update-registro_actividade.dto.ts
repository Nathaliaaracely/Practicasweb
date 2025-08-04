import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroActividadeDto } from './create-registro_actividade.dto';

export class UpdateRegistroActividadeDto extends PartialType(CreateRegistroActividadeDto) {
  id: number;
}
