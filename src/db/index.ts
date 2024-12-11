import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgres://postgres:postgres@127.0.0.1:5432/magaseen'
});

export const db = drizzle({ client: pool });