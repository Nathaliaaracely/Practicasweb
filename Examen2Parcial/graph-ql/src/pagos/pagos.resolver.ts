import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PagosService } from './pagos.service';
import { Pago } from './entities/pago.entity';
import { CreatePagoInput } from './dto/create-pago.input';
import { UpdatePagoInput } from './dto/update-pago.input';

@Resolver(() => Pago)
export class PagosResolver {
  constructor(private readonly pagosService: PagosService) {}

  @Mutation(() => Pago, { name: 'createPago' })
  async createPago(
    @Args('createPagoInput') createPagoInput: CreatePagoInput,
  ): Promise<Pago> {
    return this.pagosService.create(createPagoInput);
  }

  @Query(() => [Pago], { name: 'pagos' })
  async findAll(): Promise<Pago[]> {
    return this.pagosService.findAll();
  }

  @Query(() => Pago, { name: 'pago' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Pago> {
    return this.pagosService.findOne(id);
  }

  @Mutation(() => Pago, { name: 'updatePago' })
  async updatePago(
    @Args('id', { type: () => ID }) id: string,
    @Args('updatePagoInput') updatePagoInput: UpdatePagoInput,
  ): Promise<Pago> {
    return this.pagosService.update(id, updatePagoInput);
  }

  @Mutation(() => Pago, { name: 'removePago' })
  async removePago(@Args('id', { type: () => ID }) id: string): Promise<Pago> {
    return this.pagosService.remove(id);
  }
}
