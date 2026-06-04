import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testConnection() {
  try {
    console.log('[DB Test] Testing Supabase connection...')
    
    // Test basic query
    const leadCount = await prisma.lead.count()
    console.log(`[DB Test] Successfully connected! Total leads in database: ${leadCount}`)
    
    process.exit(0)
  } catch (error: any) {
    console.error('[DB Test] Connection failed:', {
      message: error?.message,
      code: error?.code,
      meta: error?.meta,
    })
    process.exit(1)
  }
}

testConnection()
