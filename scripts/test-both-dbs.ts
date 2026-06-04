import { PrismaClient } from '@prisma/client'

async function testNeon() {
  console.log('\n=== Testing Neon Database ===')
  const neonClient = new PrismaClient({
    datasources: {
      db: {
        url: 'postgresql://neondb_owner:npg_LsbVH7T9doSq@ep-steep-snow-apn6lgx9-pooler.c-7.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require',
      },
    },
  })

  try {
    const count = await neonClient.lead.count()
    console.log(`✅ Neon Connected! Total leads: ${count}`)
    return true
  } catch (error: any) {
    console.error('❌ Neon Failed:', error.message)
    return false
  } finally {
    await neonClient.$disconnect()
  }
}

async function testSupabase() {
  console.log('\n=== Testing Supabase Database ===')
  const supabaseClient = new PrismaClient({
    datasources: {
      db: {
        url: 'postgres://postgres:qYTi1Fgr8MjgswcP@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true',
      },
    },
  })

  try {
    const count = await supabaseClient.lead.count()
    console.log(`✅ Supabase Connected! Total leads: ${count}`)
    return true
  } catch (error: any) {
    console.error('❌ Supabase Failed:', error.message)
    return false
  } finally {
    await supabaseClient.$disconnect()
  }
}

async function main() {
  const neonWorks = await testNeon()
  const supabaseWorks = await testSupabase()

  console.log('\n=== Summary ===')
  console.log(`Neon: ${neonWorks ? '✅ Working' : '❌ Failed'}`)
  console.log(`Supabase: ${supabaseWorks ? '✅ Working' : '❌ Failed'}`)

  if (neonWorks) {
    console.log('\n✅ Use NEON_DATABASE_URL for production')
  } else if (supabaseWorks) {
    console.log('\n✅ Use POSTGRES_PRISMA_URL for production')
  }
}

main().catch(console.error)
