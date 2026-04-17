import {
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AutoresService } from './autores.service';
import { Get } from '@nestjs/common';
import { criarAutorDto } from './autores.dto';

@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/listar-autores')
  async listarAutores() {
    return await this.autoresService.listarAutores();
  }

  @Get('/listar-autores/:id')
  listarAutor(@Param('id', ParseIntPipe) id: number) {
    return this.autoresService.listarAutor(id);
  }

  @Post('/criar-autor')
  criarAutor(@Body() bodyRequest: criarAutorDto) {
    return this.autoresService.criarAutor(bodyRequest);
  }

  @Put('/atualizar autor/id')
  atualizarAutor(
    @Param('id', ParseIntPipe) idAutor: number,
    @Body() bodyRequest: criarAutorDto,
  ) {
    return this.autoresService.autolizarAutor(idAutor, bodyRequest);
  }

  @Delete('/deletar-autor/:id')
  deletarAutor(@Param('id', ParseIntPipe) idAutor: number) {
    return this.autoresService.deletarAutor(idAutor);
  }
}
