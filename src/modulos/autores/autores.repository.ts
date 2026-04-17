import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DRIZZLE } from 'src/db/database/database.constants';
import { autoresTabela } from 'src/db/schemas';
import type { drizzleDB } from 'src/db/types/drizzleDB';

@Injectable()
export class autoresrepository {
  constructor(@Inject(DRIZZLE) private readonly db: drizzleDB) {}

  async listarAutores() {
    try {
      return this.db.select().from(autoresTabela);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao listar autores ');
    }
  }
}
