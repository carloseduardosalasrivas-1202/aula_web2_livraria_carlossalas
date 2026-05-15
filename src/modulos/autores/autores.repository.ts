import { Injectable, InternalServerErrorException } from '@nestjs/common';
import type { drizzleDB } from 'src/db/types/drizzleDB';
import { autoresTabela } from 'src/db/schemas/autores';
import { DRIZZLE } from 'src/db/database/database.constants';
import { Inject } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { CriarAutorDto, AtualizarAutorDto } from './autores.dto';
import { throwError } from 'rxjs';

@Injectable()
export class AutoresRepository {
  constructor(@Inject(DRIZZLE) private readonly db: drizzleDB) {}

  async listarAutores() {
    try {
      return this.db.select().from(autoresTabela);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar autores');
    }
  }
  async listarAutor(id: number) {
    try {
      return await this.db
        .select()
        .from(autoresTabela)
        .where(eq(autoresTabela.id, id));
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar autor');
    }
  }
  async criarAutor(bodyRequest: CriarAutorDto) {
    try {
      await this.db.insert(autoresTabela).values(bodyRequest);

      const auotrCriado = await this.db
        .select()
        .from(autoresTabela)
        .where(eq(autoresTabela.email, bodyRequest.email));

      return auotrCriado;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar autor');
    }
  }

  async atualizarAutor(id: number, bodyRequest: AtualizarAutorDto) {
    try {
      await this.db
        .update(autoresTabela)
        .set({ nome: bodyRequest.nome })
        .where(eq(autoresTabela.id, id));

      return 'Autor atualizado com sucesso';
    } catch (error) {
      throw new InternalServerErrorException('Erro ao atualizar autor');
    }
  }

  async deletarAutor(id: number) {
    try {
      await this.db.delete(autoresTabela).where(eq(autoresTabela.id, id));
      return 'Autor deletado com sucesso';
    } catch (error) {
      throw new InternalServerErrorException('Erro ao deletar autor');
    }
  }
}
