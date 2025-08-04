import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { RegistroActividadesService } from './registro_actividades.service';
import { RegistroActividade } from './entities/registro_actividade.entity';
import { CreateRegistroActividadeInput } from './dto/create-registro_actividade.input';
import { UpdateRegistroActividadeInput } from './dto/update-registro_actividade.input';

@Resolver(() => RegistroActividade)
export class RegistroActividadesResolver {
  constructor(
    private readonly registroActividadesService: RegistroActividadesService,
  ) {}

  @Mutation(() => RegistroActividade, { name: 'createRegistroActividade' })
  async createRegistroActividade(
    @Args('createRegistroActividadeInput')
    createRegistroActividadeInput: CreateRegistroActividadeInput,
  ): Promise<RegistroActividade> {
    return this.registroActividadesService.create(createRegistroActividadeInput);
  }

  @Query(() => [RegistroActividade], { name: 'registroActividades' })
  async findAll(): Promise<RegistroActividade[]> {
    return this.registroActividadesService.findAll();
  }

  @Query(() => RegistroActividade, { name: 'registroActividade' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<RegistroActividade> {
    return this.registroActividadesService.findOne(id);
  }

  @Mutation(() => RegistroActividade, { name: 'updateRegistroActividade' })
  async updateRegistroActividade(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateRegistroActividadeInput')
    updateRegistroActividadeInput: UpdateRegistroActividadeInput,
  ): Promise<RegistroActividade> {
    return this.registroActividadesService.update(id, updateRegistroActividadeInput);
  }

  @Mutation(() => RegistroActividade, { name: 'removeRegistroActividade' })
  async removeRegistroActividade(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<RegistroActividade> {
    return this.registroActividadesService.remove(id);
  }
}
