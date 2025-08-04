import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { JsonStorageService } from '../storage/json-storage.service';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('UsuariosStorage')
    private readonly storageService: JsonStorageService<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.storageService.create(createUsuarioDto);
  }

  async findAll() {
    return this.storageService.findAll();
  }

  async findOne(id: string) {
    const usuario = await this.storageService.findOne(id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado`);
    }
    return usuario;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioActualizado = await this.storageService.update(
      id,
      updateUsuarioDto,
    );
    if (!usuarioActualizado) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado`);
    }
    return usuarioActualizado;
  }

  async remove(id: string) {
    const success = await this.storageService.remove(id);
    if (!success) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado`);
    }
    return { message: `Usuario con ID "${id}" eliminado` };
  }
}
