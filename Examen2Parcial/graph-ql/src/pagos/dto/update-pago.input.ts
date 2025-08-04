import { CreatePagoInput } from './create-pago.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePagoInput extends PartialType(CreatePagoInput) {
  
}
