import { Injectable } from '@nestjs/common';
import { criarAutorDto } from './autores.dto';
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
  }
}
