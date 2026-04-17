import { Injectable } from '@nestjs/common';
import { criarAutorDto } from './autores.dto';
import { autoresrepository } from './autores.repository';
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
  constructor(private readonly autoresrepository: autoresrepository) {}

  async listarautores() {
    return await this.autoresrepository.listarAutores();
  }

  listarAutores() {
    if (!autores) {
      return 'não há autores cadastros ';
    }
    return autores;
  }
  listarAutor(id: number) {
    const autorEncontrado = autores.find((autor) => autor.id === id);

    if (!autorEncontrado) {
      return 'Autor não encontrado';
    }
    return autorEncontrado;
  }

  criarAutor(bodyRequest: criarAutorDto) {
    if (!bodyRequest.nome || !bodyRequest.email) {
      return 'Nome e email são obrigatorios';
    }
    autores.push({
      id: autores.length + 1,
      nome: bodyRequest.nome,
      email: bodyRequest.email,
    });
    return autores;
  }

  autolizarAutor(idAutor: number, bodyRequest: any) {
    const autorEncontrado = autores.find((autor) => autor.id === idAutor);

    if (!autorEncontrado) {
      return 'Autor não encontrado';
    }

    if (bodyRequest.nome) {
      autorEncontrado.nome = bodyRequest.nome;
    }

    if (bodyRequest.email) {
      autorEncontrado.email = bodyRequest.email;
    }

    return autorEncontrado;
  }
  deletarAutor(idAutor: number) {
    this.listarAutor(idAutor);

    autores = autores.filter((autor) => autor.id !== idAutor);

    return autores;
  }
}
