require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');

async function testConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✓ Connected to Supabase successfully!');
    
    const res = await client.query('SELECT NOW()');
    console.log('✓ Query successful. Current timestamp:', res.rows[0]);
  } catch (error) {
    console.error('✗ Connection error:', error.message);
  } finally {
    await client.end();
  }
}

testConnection();
