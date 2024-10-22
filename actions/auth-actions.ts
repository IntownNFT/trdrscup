'use server'

import { db } from '@/db/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { ActionState } from '@/types/action-types'

export async function signUp(email: string, password: string, name: string): Promise<ActionState> {
  try {
    const existingUser = await db.select().from(users).where(eq(users.email, email))
    if (existingUser.length > 0) {
      return { status: 'error', message: 'User already exists' }
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await db.insert(users).values({ email, password: hashedPassword, name }).returning()

    return { status: 'success', data: { id: newUser[0].id, email: newUser[0].email, name: newUser[0].name } }
  } catch (error) {
    console.error('Signup error:', error)
    return { status: 'error', message: 'An unexpected error occurred' }
  }
}

// Remove the signIn function from here as we're using NextAuth's signIn