import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroActividadesService } from './registro_actividades.service';
import { CreateRegistroActividadeDto } from './dto/create-registro_actividade.dto';
import { UpdateRegistroActividadeDto } from './dto/update-registro_actividade.dto';

@Controller('registro-actividades')
export class RegistroActividadesController {
  constructor(private readonly registroActividadesService: RegistroActividadesService) {}

  @Post()
  create(@Body() createRegistroActividadeDto: CreateRegistroActividadeDto) {
    return this.registroActividadesService.create(createRegistroActividadeDto);
  }

  @Get()
  findAll() {
    return this.registroActividadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroActividadesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroActividadeDto: UpdateRegistroActividadeDto) {
    return this.registroActividadesService.update(id, updateRegistroActividadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroActividadesService.remove(id);
  }
}
