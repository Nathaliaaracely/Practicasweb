import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DonacionesService } from './donaciones.service';
import { Donacione } from './entities/donacione.entity';
import { CreateDonacioneInput } from './dto/create-donacione.input';
import { UpdateDonacioneInput } from './dto/update-donacione.input';

@Resolver(() => Donacione)
export class DonacionesResolver {
  constructor(private readonly donacionesService: DonacionesService) {}

  @Mutation(() => Donacione)
  createDonacione(@Args('createDonacioneInput') createDonacioneInput: CreateDonacioneInput) {
    return this.donacionesService.create(createDonacioneInput);
  }

  @Query(() => [Donacione], { name: 'donaciones' })
  findAll() {
    return this.donacionesService.findAll();
  }

  @Query(() => Donacione, { name: 'donacione' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.donacionesService.findOne(id);
  }

  @Mutation(() => Donacione)
  updateDonacione(@Args('updateDonacioneInput') updateDonacioneInput: UpdateDonacioneInput) {
    return this.donacionesService.update(updateDonacioneInput.id, updateDonacioneInput);
  }

  @Mutation(() => Donacione)
  removeDonacione(@Args('id', { type: () => Int }) id: string) {
    return this.donacionesService.remove(id);
  }
}
