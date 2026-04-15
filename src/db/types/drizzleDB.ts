import { drizzle } from 'drizzle-orm/node-mssql';
import * as schema from '../schemas/index';

export type drizzleDB = ReturnType<typeof drizzle<typeof schema>>;
