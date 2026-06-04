# Quick Start Guide

## Local Development Setup (5 minutes)

### 1. Setup environment
```bash
cp .env.example .env.local
```

### 2. Add your Neon credentials to `.env.local`

Get from Vercel dashboard → Settings → Environment Variables → Copy these values:

```bash
NEON_DATABASE_URL=postgresql://neondb_owner:npg_LsbVH7T9doSq@ep-steep-snow-apn6lgx9-pooler.c-7.us-east-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require
NEON_DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_LsbVH7T9doSq@ep-steep-snow-apn6lgx9.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require
```

### 3. Generate NEXTAUTH_SECRET
```bash
openssl rand -base64 32
# Paste output into .env.local as NEXTAUTH_SECRET value
```

### 4. Setup database
```bash
npx prisma migrate deploy
```

### 5. Start development
```bash
npm run dev
```

Visit http://localhost:3000

## Production Deployment

### Prerequisites
Make sure these are set in Vercel → Settings → Environment Variables:

✅ Automatic (from Neon integration):
- `NEON_DATABASE_URL`
- `NEON_DATABASE_URL_UNPOOLED`

✅ Manual (set in Vercel):
- `NEXTAUTH_SECRET` (from local setup)
- `NEXTAUTH_URL` = your domain (e.g., `https://www.varunaassi.com`)
- `RESEND_API_KEY` (from Resend)
- `RESEND_FROM_EMAIL`
- `ADMIN_EMAIL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

### Deploy
```bash
git push origin v0/vishu810singh-7834-4d6f289b
# Vercel auto-deploys
```

### Verify
```bash
npx vercel logs --prod
# Should see successful page loads, no database errors
```

## Testing

### Local
```bash
# Submit form at http://localhost:3000/contact
# Check console for "Lead created successfully"
```

### Production
```bash
# Submit form at https://www.varunaassi.com/contact
# Check admin email for notification
# Check database for new lead
```

## Environment Variables Reference

| Variable | Local | Production | Required |
|----------|:-----:|:----------:|:--------:|
| NEON_DATABASE_URL | `.env.local` | Vercel (auto) | ✅ |
| NEON_DATABASE_URL_UNPOOLED | `.env.local` | Vercel (auto) | ✅ |
| NEXTAUTH_SECRET | `.env.local` | Vercel | ✅ |
| NEXTAUTH_URL | `.env.local` | Vercel | ✅ |
| RESEND_API_KEY | `.env.local` | Vercel | ❌* |
| RESEND_FROM_EMAIL | `.env.local` | Vercel | ❌* |
| ADMIN_EMAIL | `.env.local` | Vercel | ❌* |
| NEXT_PUBLIC_WHATSAPP_NUMBER | `.env.local` | Vercel | ❌ |

*Email sending will log warnings but won't fail forms if not set

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "NEON_DATABASE_URL not set" | Check `.env.local` has the variable, restart dev server |
| "Can't reach database" | Copy connection string again from Vercel/Neon, don't manually edit |
| Form failing on production | Check `npx vercel logs --prod` for errors |
| NextAuth not working | Verify NEXTAUTH_SECRET and NEXTAUTH_URL are set |

## Files to Know

- `.env.example` - Template for all required variables
- `DATABASE_SETUP.md` - Full setup guide with all details
- `SETUP_SUMMARY.md` - Complete documentation of changes made
- `lib/prisma.ts` - Database client with validation
- `app/api/auth/[...nextauth]/route.ts` - Auth with env validation

## Key Changes Made

1. ✅ Prisma uses `NEON_DATABASE_URL` (pooled) for API requests
2. ✅ Prisma uses `NEON_DATABASE_URL_UNPOOLED` for migrations
3. ✅ Environment validation at runtime (allows builds to succeed)
4. ✅ Clear error messages if env vars missing
5. ✅ Email gracefully handles missing Resend config

Everything is ready for both local development and production deployment!
