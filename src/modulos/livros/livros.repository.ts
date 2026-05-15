import { Injectable, Inject } from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import type { drizzleDB } from 'src/db/types/drizzleDB';
import { livrosTabela } from 'src/db/schemas/livros';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class LivrosRepository {
  constructor(@Inject(DRIZZLE) private readonly db: drizzleDB) {}

  async listarLivros() {
    try {
      const livros = await this.db.select().from(livrosTabela);
      return livros;
    } catch (error) {}
  }
}
