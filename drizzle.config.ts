import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgres://postgres:postgres@127.0.0.1:5432/magaseen'
  }
});
