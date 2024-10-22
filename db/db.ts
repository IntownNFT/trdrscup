import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

let db: ReturnType<typeof drizzle>;

if (process.env.NODE_ENV === 'production') {
  // In production, we'll use a connection pool
  const { Pool } = require('pg');
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  db = drizzle(pool, { schema });
} else {
  // In development, we'll use a single client
  const { Client } = require('pg');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  client.connect();
  db = drizzle(client, { schema });
}

export { db };