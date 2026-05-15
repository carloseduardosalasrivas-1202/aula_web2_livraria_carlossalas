import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarAutorDto } from './autores.dto';
import { AutoresRepository } from './autores.repository';
import { NotFoundError } from 'rxjs';
const livros = ['livro1', 'livro 2 '];
let autores = [
  {
    id: 1,
    nome: 'João da Silva',
    email: 'joao.silva@gmail.com',
  },
  {
    id: 2,
    nome: 'Maria Oliveira',
    email: 'maria.oliveira@gmail.com',
  },
  {
    id: 3,
    nome: 'Pedro Santos',
    email: 'pedro.santos@gmail.com',
  },
];

@Injectable()
export class AutoresService {
  constructor(private readonly autoresrepository: AutoresRepository) {}

  async listarautores() {
    return await this.autoresrepository.listarAutores();
  }

  listarAutores() {
    if (!autores) {
      return 'não há autores cadastros ';
    }
    return autores;
  }
  async listarAutor(id: number) {
    const autorEncontrado = await this.autoresrepository.listarAutor(id);

    if (autorEncontrado.length === 0) {
      throw new NotFoundException(`Autor com id ${id} não encontrado`);
    }
    return autorEncontrado;
  }
  criarAutor(bodyRequest: CriarAutorDto) {
    return this.autoresrepository.criarAutor(bodyRequest);
  }

  async atualizarAutor(idAutor: number, bodyRequest: CriarAutorDto) {
    await this.listarAutor(idAutor);

    return await this.autoresrepository.atualizarAutor(idAutor, bodyRequest);
  }

  deletarAutor(idAutor: number) {
    this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }
}
