import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EntradaService } from './entrada.service';
import { Entrada } from './entities/entrada.entity';
import { CreateEntradaInput } from './dto/create-entrada.input';
import { UpdateEntradaInput } from './dto/update-entrada.input';

@Resolver(() => Entrada)
export class EntradaResolver {
  constructor(private readonly entradaService: EntradaService) {}

  @Mutation(() => Entrada, { name: 'createEntrada' })
  async createEntrada(
    @Args('createEntradaInput') createEntradaInput: CreateEntradaInput,
  ): Promise<Entrada> {
    return this.entradaService.create(createEntradaInput);
  }

  @Query(() => [Entrada], { name: 'entradas' })
  async findAll(): Promise<Entrada[]> {
    return this.entradaService.findAll();
  }

  @Query(() => Entrada, { name: 'entrada' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Entrada> {
    return this.entradaService.findOne(id);
  }

  @Mutation(() => Entrada, { name: 'updateEntrada' })
  async updateEntrada(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateEntradaInput') updateEntradaInput: UpdateEntradaInput,
  ): Promise<Entrada> {
    return this.entradaService.update(id, updateEntradaInput);
  }

  @Mutation(() => Entrada, { name: 'removeEntrada' })
  async removeEntrada(@Args('id', { type: () => ID }) id: string): Promise<Entrada> {
    return this.entradaService.remove(id);
  }
}
