import { PartialType } from '@nestjs/mapped-types';
import { CreateReceptoreDto } from './create-receptore.dto';

export class UpdateReceptoreDto extends PartialType(CreateReceptoreDto) {
  id: number;
}
