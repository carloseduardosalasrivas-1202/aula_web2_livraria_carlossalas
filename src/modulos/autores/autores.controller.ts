import { Controller, Param, ParseIntPipe, Post, Body } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { Get } from '@nestjs/common';
import { criarAutorDto } from './autores.dto';

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

  @Post('/criar-autor')
  criarAutor(@Body() bodyRequest: criarAutorDto) {
    return this.autoresService.criarAutor(bodyRequest);
  }
}
