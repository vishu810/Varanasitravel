import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma?: PrismaClient; [key: string]: any }

function getPrismaClient() {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }

  const prismaClientSingletonKey = '__prisma'
  if (globalForPrisma[prismaClientSingletonKey]) {
    return globalForPrisma[prismaClientSingletonKey]
  }

  const client = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

  globalForPrisma[prismaClientSingletonKey] = client
  return client
}

export const prisma = getPrismaClient()
