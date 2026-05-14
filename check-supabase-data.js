require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');

async function checkData() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✓ Connected to Supabase database');

    // Check total leads
    const countResult = await client.query('SELECT COUNT(*) as total_leads FROM "Lead"');
    const totalLeads = parseInt(countResult.rows[0].total_leads);
    console.log(`📊 Total leads in database: ${totalLeads}`);

    if (totalLeads > 0) {
      // Get recent leads
      const leadsResult = await client.query(`
        SELECT id, "fullName", whatsapp, email, "travelMonth", status, "createdAt"
        FROM "Lead"
        ORDER BY "createdAt" DESC
        LIMIT 5
      `);

      console.log('\n📋 Recent leads:');
      leadsResult.rows.forEach((row, i) => {
        console.log(`${i+1}. ${row.fullName} - ${row.whatsapp} - Status: ${row.status} - ${new Date(row.createdAt).toLocaleString()}`);
      });
    } else {
      console.log('❌ No leads found in database');
    }

    // Check all tables
    const tablesResult = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);

    console.log('\n📋 Database tables:');
    tablesResult.rows.forEach(row => {
      console.log(`  - ${row.table_name}`);
    });

  } catch (error) {
    console.error('❌ Database error:', error.message);
  } finally {
    await client.end();
  }
}

checkData();
