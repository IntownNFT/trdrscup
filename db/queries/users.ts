import { db } from '../db';
import { users } from '../schema';
import { eq } from 'drizzle-orm';

export const getUserByEmail = async (email: string) => {
  return await db.select().from(users).where(eq(users.email, email)).limit(1);
};

export const createUser = async (email: string, password: string, name: string) => {
  return await db.insert(users).values({ email, password, name }).returning();
};