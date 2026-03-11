import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AutoresService } from './autores.service';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/listar-autores')
  listarAutores() {
    console.log('ListarController');
    return this.autoresService.listarAutores();
  }

  @Get('/listar-autores/:id')
  listarAutor(@Param('id', ParseIntPipe) id: number) {
    return this.autoresService.listarAutor(id);
  }
}
