import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TranssacionesPagosService } from './transsaciones-pagos.service';
import { TranssacionesPago } from './entities/transsaciones-pago.entity';
import { CreateTranssacionesPagoInput } from './dto/create-transsaciones-pago.input';
import { UpdateTranssacionesPagoInput } from './dto/update-transsaciones-pago.input';

@Resolver(() => TranssacionesPago)
export class TranssacionesPagosResolver {
  constructor(private readonly transsacionesPagosService: TranssacionesPagosService) {}

  @Mutation(() => TranssacionesPago)
  createTranssacionesPago(@Args('createTranssacionesPagoInput') createTranssacionesPagoInput: CreateTranssacionesPagoInput) {
    return this.transsacionesPagosService.create(createTranssacionesPagoInput);
  }

  @Query(() => [TranssacionesPago], { name: 'transsacionesPagos' })
  findAll() {
    return this.transsacionesPagosService.findAll();
  }

  @Query(() => TranssacionesPago, { name: 'transsacionesPago' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.transsacionesPagosService.findOne(id);
  }

  @Mutation(() => TranssacionesPago)
  updateTranssacionesPago(@Args('updateTranssacionesPagoInput') updateTranssacionesPagoInput: UpdateTranssacionesPagoInput) {
    return this.transsacionesPagosService.update(updateTranssacionesPagoInput.id, updateTranssacionesPagoInput);
  }

  @Mutation(() => TranssacionesPago)
  removeTranssacionesPago(@Args('id', { type: () => Int }) id: string) {
    return this.transsacionesPagosService.remove(id);
  }
}
