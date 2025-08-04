import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EventosService } from './eventos.service';
import { Evento } from './entities/evento.entity';
import { CreateEventoInput } from './dto/create-evento.input';
import { UpdateEventoInput } from './dto/update-evento.input';

@Resolver(() => Evento)
export class EventosResolver {
  constructor(private readonly eventosService: EventosService) {}

  @Mutation(() => Evento, { name: 'createEvento' })
  async createEvento(
    @Args('createEventoInput') createEventoInput: CreateEventoInput,
  ): Promise<Evento> {
    return this.eventosService.create(createEventoInput);
  }

  @Query(() => [Evento], { name: 'eventos' })
  async findAll(): Promise<Evento[]> {
    return this.eventosService.findAll();
  }

  @Query(() => Evento, { name: 'evento' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Evento> {
    return this.eventosService.findOne(id);
  }

  @Mutation(() => Evento, { name: 'updateEvento' })
  async updateEvento(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateEventoInput') updateEventoInput: UpdateEventoInput,
  ): Promise<Evento> {
    return this.eventosService.update(id, updateEventoInput);
  }

  @Mutation(() => Evento, { name: 'removeEvento' })
  async removeEvento(@Args('id', { type: () => ID }) id: string): Promise<Evento> {
    return this.eventosService.remove(id);
  }
}
