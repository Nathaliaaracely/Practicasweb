import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';
import { JsonStorageService } from '../storage/json-storage.service';
import { Usuario } from './entities/usuario.entity';


@Injectable()
export class UsuariosService {
  constructor(
    @Inject('UsuariosStorage')
    private readonly storageService: JsonStorageService<Usuario>,
  ) {}

  async create(createUsuarioInput: CreateUsuarioInput): Promise<Usuario> {
    const usuario: Usuario = {
      id: this.generateId(),
      nombre: createUsuarioInput.nombre,
      apellido: createUsuarioInput.apellido,
      correo: createUsuarioInput.correo,
      telefono: createUsuarioInput.telefono,
      tipo: createUsuarioInput.tipo,
    };
    return this.storageService.create(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.storageService.findAll();
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = await this.storageService.findOne(id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado`);
    }
    return usuario;
  }

  async update(id: string, updateUsuarioInput: UpdateUsuarioInput): Promise<Usuario> {
    const usuarioActualizado = await this.storageService.update(id, updateUsuarioInput);
    if (!usuarioActualizado) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado`);
    }
    return usuarioActualizado;
  }

  async remove(id: string): Promise<Usuario> {
    const usuario = await this.findOne(id);
    const success = await this.storageService.remove(id);
    if (!success) {
      // Esto no debería ocurrir si findOne tuvo éxito, pero es una buena práctica.
      throw new NotFoundException(`No se pudo eliminar el usuario con ID "${id}"`);
    }
    return usuario; // GraphQL a menudo espera que se devuelva el objeto eliminado.
  }

  private generateId(): string {
    // Usamos crypto para generar un ID único.
    const { randomUUID } = require('crypto');
    return randomUUID();
  }
}
