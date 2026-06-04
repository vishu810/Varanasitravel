# Database and Environment Setup Guide

This document explains the database configuration for Varanasitravel, including how it works locally and in production.

## Database: Neon PostgreSQL

The application uses **Neon** for PostgreSQL hosting via Vercel's integration.

### Environment Variables

The application requires two Neon connection strings:

| Variable | Purpose | When to Use |
|----------|---------|------------|
| `NEON_DATABASE_URL` | **Pooled connection** | Production API/web requests (all standard operations) |
| `NEON_DATABASE_URL_UNPOOLED` | **Direct connection** | Local migrations, seed scripts, admin operations |

**Important SSL Notes:**
- Both connections use `sslmode=require` for security
- `NEON_DATABASE_URL` includes `channel_binding=require` (pooler requirement)
- `NEON_DATABASE_URL_UNPOOLED` omits `channel_binding` (direct connection)

### Getting Your Connection Strings

1. **From Vercel Dashboard:**
   - Go to Project Settings → Environment Variables
   - Neon integration automatically provides `NEON_DATABASE_URL` and `NEON_DATABASE_URL_UNPOOLED`

2. **From Neon Dashboard:**
   - Project → Connection → Pooled or Direct
   - Copy the connection string
   - Update `.env.local` or Vercel environment variables

## Local Development Setup

### 1. Create `.env.local`

Copy from `.env.example` and fill in your values:

```bash
cp .env.example .env.local
```

Add your Neon connection strings:

```
NEON_DATABASE_URL=postgresql://neondb_owner:password@ep-xxx-pooler.c-7.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require
NEON_DATABASE_URL_UNPOOLED=postgresql://neondb_owner:password@ep-xxx.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require
NEXTAUTH_SECRET=your-generated-secret-here
NEXTAUTH_URL=http://localhost:3000
```

### 2. Generate NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

Copy the output and add to `.env.local`.

### 3. Run Database Migrations

```bash
npx prisma migrate deploy
```

This uses `NEON_DATABASE_URL_UNPOOLED` (from `.env.local`) for the direct connection.

### 4. Seed Database (Optional)

```bash
npm run db:seed
```

### 5. Start Development Server

```bash
npm run dev
```

The app will use `NEON_DATABASE_URL` for API requests.

## Production Deployment

### Vercel Configuration

**The Neon integration automatically sets these environment variables:**

- `NEON_DATABASE_URL` (pooled) → Used by Prisma for API requests
- `NEON_DATABASE_URL_UNPOOLED` (direct) → Available for migrations if needed

**Additional Environment Variables to Set:**

- `NEXTAUTH_SECRET` - Generate locally with `openssl rand -base64 32`
- `NEXTAUTH_URL` - Set to your production domain (e.g., `https://www.varunaassi.com`)
- `RESEND_API_KEY` - Resend API key for email
- `RESEND_FROM_EMAIL` - Email sender address
- `ADMIN_EMAIL` - Admin notification email
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - WhatsApp contact number

### Deployment Steps

1. Push code to GitHub:
   ```bash
   git push origin main
   ```

2. Vercel automatically deploys and:
   - Reads environment variables from dashboard
   - Uses `NEON_DATABASE_URL` for API connections
   - Runs any necessary migrations

3. Verify deployment:
   - Check Vercel logs: `npx vercel logs --prod`
   - Test form submission on production site

## Troubleshooting

### Local Development Issues

**Error: "can't reach database server"**
- Verify `NEON_DATABASE_URL` is correct in `.env.local`
- Check network connectivity to Neon
- Ensure `sslmode=require` is in the connection string

**Error: "NEXTAUTH_SECRET is not set"**
- Add `NEXTAUTH_SECRET` to `.env.local`
- Restart dev server: `npm run dev`

**Error: "P1000" or "no tenant identifier"**
- Double-check the pooler connection string format
- Verify `channel_binding=require` is included in pooled URL
- Ensure SSL certificate is valid

### Production Issues

**Form submissions failing**
- Check Vercel logs: `npx vercel logs --prod`
- Verify all environment variables are set in Vercel dashboard
- Ensure `NEON_DATABASE_URL` is the pooled connection (not unpooled)

**Migrations not running**
- Vercel doesn't auto-run migrations on deploy
- If needed, run manually: `npx prisma migrate deploy` with production env vars

## Connection Flow

```
Local Development:
.env.local → Prisma Schema (NEON_DATABASE_URL) → Neon Pooler → Database

Production:
Vercel Env Vars → Prisma Schema (NEON_DATABASE_URL) → Neon Pooler → Database

Migrations:
.env.local → Prisma Schema (NEON_DATABASE_URL_UNPOOLED) → Neon Direct → Database
```

## Prisma Schema Configuration

The schema is configured to use Neon environment variables:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("NEON_DATABASE_URL")        # Pooled - for API requests
  directUrl = env("NEON_DATABASE_URL_UNPOOLED")  # Direct - for migrations
}
```

This ensures:
- **API requests** use the pooled connection (better for high-concurrency)
- **Migrations** use the direct connection (required for schema changes)

## Security Notes

- **SSL Connections:** All connections require `sslmode=require`
- **Channel Binding:** Pooler uses `channel_binding=require` (additional security)
- **Secrets:** Never commit `.env.local` or production secrets to Git
- **NEXTAUTH_SECRET:** Keep this secret and unique per environment

## Additional Resources

- [Neon Documentation](https://neon.tech/docs)
- [Prisma PostgreSQL Guide](https://www.prisma.io/docs/orm/overview/databases/postgresql)
- [NextAuth.js Configuration](https://next-auth.js.org/configuration/pages)
