require('dotenv').config({ path: '.env.local' });
const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

async function runMigration() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log('✓ Connected to database');

    // Create _prisma_migrations table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
        id SERIAL PRIMARY KEY,
        checksum VARCHAR(64) NOT NULL,
        finished_at TIMESTAMP,
        migration_name VARCHAR(255) NOT NULL,
        logs TEXT,
        rolled_back_at TIMESTAMP,
        started_at TIMESTAMP NOT NULL DEFAULT now(),
        applied_in_batch INTEGER NOT NULL
      );
    `);
    console.log('✓ _prisma_migrations table ready');

    // PostgreSQL-compatible migration SQL
    const migrationSql = `
      -- CreateTable User
      CREATE TABLE IF NOT EXISTS "User" (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        name TEXT,
        password TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'ADMIN',
        "createdAt" TIMESTAMP NOT NULL DEFAULT now()
      );

      -- CreateTable Account  
      CREATE TABLE IF NOT EXISTS "Account" (
        id TEXT PRIMARY KEY,
        "userId" TEXT NOT NULL,
        type TEXT NOT NULL,
        provider TEXT NOT NULL,
        "providerAccountId" TEXT NOT NULL,
        refresh_token TEXT,
        access_token TEXT,
        expires_at INTEGER,
        token_type TEXT,
        scope TEXT,
        id_token TEXT,
        session_state TEXT,
        CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE
      );

      CREATE UNIQUE INDEX IF NOT EXISTS "Account_provider_providerAccountId_key" ON "Account"(provider, "providerAccountId");

      -- CreateTable Session
      CREATE TABLE IF NOT EXISTS "Session" (
        id TEXT PRIMARY KEY,
        "sessionToken" TEXT NOT NULL UNIQUE,
        "userId" TEXT NOT NULL,
        expires TIMESTAMP NOT NULL,
        CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE
      );

      -- CreateTable Itinerary
      CREATE TABLE IF NOT EXISTS "Itinerary" (
        id TEXT PRIMARY KEY,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        title TEXT NOT NULL,
        days INTEGER NOT NULL,
        "totalEstimate" FLOAT NOT NULL,
        "shareToken" TEXT NOT NULL UNIQUE,
        days_data JSONB NOT NULL
      );

      -- CreateTable Lead
      CREATE TABLE IF NOT EXISTS "Lead" (
        id TEXT PRIMARY KEY,
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
        "fullName" TEXT NOT NULL,
        whatsapp TEXT NOT NULL,
        email TEXT,
        "travelMonth" TEXT NOT NULL,
        "numberOfPax" INTEGER NOT NULL,
        "budgetRange" TEXT NOT NULL,
        interests TEXT,
        "specialRequests" TEXT,
        source TEXT,
        "pageUrl" TEXT,
        status TEXT NOT NULL DEFAULT 'NEW',
        notes TEXT,
        "quotedPrice" FLOAT,
        "finalPrice" FLOAT,
        margin FLOAT,
        "itineraryId" TEXT UNIQUE,
        CONSTRAINT "Lead_itineraryId_fkey" FOREIGN KEY ("itineraryId") REFERENCES "Itinerary"(id) ON DELETE SET NULL
      );

      CREATE INDEX IF NOT EXISTS "Lead_status_idx" ON "Lead"(status);
      CREATE INDEX IF NOT EXISTS "Lead_createdAt_idx" ON "Lead"("createdAt");

      -- CreateTable Package
      CREATE TABLE IF NOT EXISTS "Package" (
        id TEXT PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        subtitle TEXT NOT NULL,
        description TEXT NOT NULL,
        highlights TEXT,
        "durationDays" INTEGER NOT NULL,
        "durationNights" INTEGER NOT NULL,
        "basePrice" FLOAT NOT NULL,
        "originalPrice" FLOAT,
        category TEXT NOT NULL,
        badge TEXT,
        "coverImage" TEXT NOT NULL,
        "isActive" BOOLEAN NOT NULL DEFAULT true,
        "isFeatured" BOOLEAN NOT NULL DEFAULT false,
        "sortOrder" INTEGER NOT NULL DEFAULT 0
      );

      -- CreateTable Experience
      CREATE TABLE IF NOT EXISTS "Experience" (
        id TEXT PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        "shortDesc" TEXT NOT NULL,
        duration TEXT NOT NULL,
        "timeOfDay" TEXT NOT NULL,
        price FLOAT NOT NULL,
        category TEXT NOT NULL,
        "coverImage" TEXT NOT NULL,
        highlights TEXT,
        "isActive" BOOLEAN NOT NULL DEFAULT true,
        "isFeatured" BOOLEAN NOT NULL DEFAULT false,
        "sortOrder" INTEGER NOT NULL DEFAULT 0
      );

      -- CreateTable Testimonial
      CREATE TABLE IF NOT EXISTS "Testimonial" (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        city TEXT NOT NULL,
        "tripType" TEXT NOT NULL,
        quote TEXT NOT NULL,
        rating INTEGER NOT NULL DEFAULT 5,
        "isActive" BOOLEAN NOT NULL DEFAULT true,
        "sortOrder" INTEGER NOT NULL DEFAULT 0
      );
    `;

    await client.query(migrationSql);
    console.log('✓ All tables created successfully!');

    // Record migration as applied
    await client.query(
      `INSERT INTO "_prisma_migrations" (checksum, migration_name, applied_in_batch, finished_at)
       VALUES ($1, $2, $3, now())
       ON CONFLICT DO NOTHING`,
      ['abc123', '20260509073710_init', 1]
    );
    console.log('✓ Migration recorded');

  } catch (error) {
    console.error('✗ Migration failed:', error.message);
  } finally {
    await client.end();
  }
}

runMigration();
