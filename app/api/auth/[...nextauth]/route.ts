import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (!user) return null
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null
        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET,
})

// Validate environment at request time
async function validateAndExecute(req: any, res: any, method: 'GET' | 'POST') {
  const secret = process.env.NEXTAUTH_SECRET
  const url = process.env.NEXTAUTH_URL
  
  if (!secret) {
    console.warn('⚠️ NEXTAUTH_SECRET is not set. Auth may not work properly. Generate with: openssl rand -base64 32')
  }
  
  if (!url && process.env.NODE_ENV === 'production') {
    console.warn('⚠️ NEXTAUTH_URL is not set for production')
  }
  
  return handler(req, res)
}

export async function GET(req: any) {
  return validateAndExecute(req, {}, 'GET')
}

export async function POST(req: any) {
  return validateAndExecute(req, {}, 'POST')
}
