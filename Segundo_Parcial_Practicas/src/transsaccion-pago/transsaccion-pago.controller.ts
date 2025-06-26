import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TranssaccionPagoService } from './transsaccion-pago.service';
import { CreateTranssaccionPagoDto } from './dto/create-transsaccion-pago.dto';
import { UpdateTranssaccionPagoDto } from './dto/update-transsaccion-pago.dto';

@Controller('transsaccion-pago')
export class TranssaccionPagoController {
  constructor(private readonly transsaccionPagoService: TranssaccionPagoService) {}

  @Post()
  create(@Body() createTranssaccionPagoDto: CreateTranssaccionPagoDto) {
    return this.transsaccionPagoService.create(createTranssaccionPagoDto);
  }

  @Get()
  findAll() {
    return this.transsaccionPagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transsaccionPagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTranssaccionPagoDto: UpdateTranssaccionPagoDto) {
    return this.transsaccionPagoService.update(+id, updateTranssaccionPagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transsaccionPagoService.remove(+id);
  }
}
