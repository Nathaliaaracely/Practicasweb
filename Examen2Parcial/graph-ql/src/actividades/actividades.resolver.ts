import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ActividadesService } from './actividades.service';
import { Actividade } from './entities/actividade.entity';
import { CreateActividadeInput } from './dto/create-actividade.input';
import { UpdateActividadeInput } from './dto/update-actividade.input';

@Resolver(() => Actividade)
export class ActividadesResolver {
  constructor(private readonly actividadesService: ActividadesService) {}

  @Mutation(() => Actividade, { name: 'createActividade' })
  async createActividade(
    @Args('createActividadeInput') createActividadeInput: CreateActividadeInput,
  ): Promise<Actividade> {
    return this.actividadesService.create(createActividadeInput);
  }

  @Query(() => [Actividade], { name: 'actividades' })
  async findAll(): Promise<Actividade[]> {
    return this.actividadesService.findAll();
  }

  @Query(() => Actividade, { name: 'actividade' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Actividade> {
    return this.actividadesService.findOne(id);
  }

  @Mutation(() => Actividade, { name: 'updateActividade' })
  async updateActividade(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateActividadeInput') updateActividadeInput: UpdateActividadeInput,
  ): Promise<Actividade> {
    return this.actividadesService.update(id, updateActividadeInput);
  }

  @Mutation(() => Actividade, { name: 'removeActividade' })
  async removeActividade(@Args('id', { type: () => ID }) id: string): Promise<Actividade> {
    return this.actividadesService.remove(id);
  }
}
