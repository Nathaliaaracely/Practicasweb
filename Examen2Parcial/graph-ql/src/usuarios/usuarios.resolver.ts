import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Resolver(() => Usuario)
export class UsuariosResolver {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Mutation(() => Usuario, { name: 'createUsuario' })
  async createUsuario(
    @Args('createUsuarioInput') createUsuarioInput: CreateUsuarioInput,
  ): Promise<Usuario> {
    return this.usuariosService.create(createUsuarioInput);
  }

  @Query(() => [Usuario], { name: 'usuarios' })
  async findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Query(() => Usuario, { name: 'usuario' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Usuario> {
    return this.usuariosService.findOne(id);
  }

  @Mutation(() => Usuario, { name: 'updateUsuario' })
  async updateUsuario(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateUsuarioInput') updateUsuarioInput: UpdateUsuarioInput,
  ): Promise<Usuario> {
    return this.usuariosService.update(id, updateUsuarioInput);
  }

  @Mutation(() => Usuario, { name: 'removeUsuario' })
  async removeUsuario(@Args('id', { type: () => ID }) id: string): Promise<Usuario> {
    return this.usuariosService.remove(id);
  }
}
