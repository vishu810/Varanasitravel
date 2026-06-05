import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    console.log('[v0] Starting admin user creation...')
    
    const hashedPassword = await bcrypt.hash('admin123', 10)
    console.log('[v0] Password hashed')
    
    // Delete existing user if any
    await prisma.user.deleteMany({
      where: { email: 'travel@varunaassi.com' }
    })
    console.log('[v0] Deleted existing admin user if any')
    
    // Create new user
    const user = await prisma.user.create({
      data: {
        email: 'travel@varunaassi.com',
        name: 'Admin',
        password: hashedPassword,
        role: 'SUPER_ADMIN',
      },
    })
    console.log('[v0] Admin user created:', user.id, user.email)
    
  } catch (error) {
    console.error('[v0] Error:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin()
