import {
  mssqlTable,
  int,
  varchar,
  datetime,
  bit,
} from 'drizzle-orm/mssql-core';

export const autoresTabela = mssqlTable('autores', {
  id: int().primaryKey().identity(),
  nome: varchar('nome', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  ativo: bit('ativo').notNull().default(true),
  criandoEm: datetime('criado em').notNull().defaultGetDate(),
});

export type Autor = typeof autoresTabela.$inferSelect;
export type criarAutor = typeof autoresTabela.$inferInsert;
