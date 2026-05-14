require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');

async function fixEnum() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✓ Connected to database');

    // Create the LeadStatus enum
    await client.query(`
      DO $$ BEGIN
        CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'QUOTED', 'CONVERTED', 'LOST');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `);
    console.log('✓ LeadStatus enum created');

    // Check if the Lead table exists and has the correct column type
    const tableExists = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public'
        AND table_name = 'Lead'
      );
    `);

    if (tableExists.rows[0].exists) {
      // Check if status column exists and its type
      const columnInfo = await client.query(`
        SELECT data_type, udt_name
        FROM information_schema.columns
        WHERE table_schema = 'public'
        AND table_name = 'Lead'
        AND column_name = 'status';
      `);

      if (columnInfo.rows.length > 0) {
        const { data_type, udt_name } = columnInfo.rows[0];
        console.log(`Status column type: ${data_type}, UDT: ${udt_name}`);

        // If it's TEXT, we need to convert it to the enum
        if (data_type === 'text') {
          // First drop the default, then change type, then add default back
          await client.query(`
            ALTER TABLE "Lead" ALTER COLUMN status DROP DEFAULT;
            ALTER TABLE "Lead" ALTER COLUMN status TYPE "LeadStatus" USING
              CASE
                WHEN status = 'NEW' THEN 'NEW'::"LeadStatus"
                WHEN status = 'CONTACTED' THEN 'CONTACTED'::"LeadStatus"
                WHEN status = 'QUALIFIED' THEN 'QUALIFIED'::"LeadStatus"
                WHEN status = 'QUOTED' THEN 'QUOTED'::"LeadStatus"
                WHEN status = 'CONVERTED' THEN 'CONVERTED'::"LeadStatus"
                WHEN status = 'LOST' THEN 'LOST'::"LeadStatus"
                ELSE 'NEW'::"LeadStatus"
              END;
            ALTER TABLE "Lead" ALTER COLUMN status SET DEFAULT 'NEW'::"LeadStatus";
          `);
          console.log('✓ Status column converted to enum type');
        }
      } else {
        // Add the status column if it doesn't exist
        await client.query(`
          ALTER TABLE "Lead" ADD COLUMN status "LeadStatus" NOT NULL DEFAULT 'NEW'::"LeadStatus";
        `);
        console.log('✓ Status column added with enum type');
      }
    }

    console.log('✓ Database schema fixed successfully!');

  } catch (error) {
    console.error('✗ Fix failed:', error.message);
  } finally {
    await client.end();
  }
}

fixEnum();
