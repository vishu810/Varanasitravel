import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma?: PrismaClient; [key: string]: any }

function validateDatabaseEnv() {
  // Check that required database environment variables are set
  const isDev = process.env.NODE_ENV === 'development'
  const pooledUrl = process.env.NEON_DATABASE_URL
  
  if (!pooledUrl && !isDev) {
    console.warn('[Prisma] NEON_DATABASE_URL is unavailable during build; database access will be validated at request time.')
  }
}

function getPrismaClient() {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }

  const prismaClientSingletonKey = '__prisma'
  if (globalForPrisma[prismaClientSingletonKey]) {
    return globalForPrisma[prismaClientSingletonKey]
  }

  // Validate environment before creating client
  validateDatabaseEnv()

  const client = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    errorFormat: 'pretty',
  })

  // Add error handler for debugging
  client.$on('error', (e: any) => {
    console.error('[Prisma Error]', {
      message: e.message,
      code: e.code,
      meta: e.meta,
    })
  })

  globalForPrisma[prismaClientSingletonKey] = client
  return client
}

export const prisma = getPrismaClient()
