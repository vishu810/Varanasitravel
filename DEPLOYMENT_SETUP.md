# Deployment Setup Guide for Vercel

## Prerequisites
- GitHub repository connected: `https://github.com/vishu810/Varanasitravel`
- Vercel account with project linked
- PostgreSQL database ready

## Step 1: Set Up Environment Variables in Vercel

1. Go to your Vercel Project Dashboard: https://vercel.com/dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these three variables:

```
DATABASE_URL=postgresql://user:password@host:5432/database_name
NEXTAUTH_SECRET=<generate-new-secret>
NEXTAUTH_URL=https://yourdomain.com
```

### How to generate NEXTAUTH_SECRET:
```bash
# On your machine, run:
openssl rand -base64 32
# Copy the output and paste it as the NEXTAUTH_SECRET value
```

### Example Values:
- **DATABASE_URL**: `postgresql://postgres:mypassword@db.example.com:5432/varanasi_travel`
- **NEXTAUTH_SECRET**: `abc123def456ghi789jkl012mno345pqr678stu/vwx==`
- **NEXTAUTH_URL**: `https://varanasitravelexperiences.com`

## Step 2: Run Database Migrations

After deploying for the first time, you need to run the Prisma migration:

1. In Vercel Dashboard, go to **Deployments** → Latest Deployment
2. Look for the deployment status
3. Once deployed, run migrations via your database client or:
   ```bash
   # Locally (if you have access to prod DB):
   DATABASE_URL=<your-prod-url> npx prisma migrate deploy
   ```

## Step 3: Deploy

### Option A: Auto-Deploy (Recommended)
1. Push any changes to GitHub:
   ```bash
   git add .
   git commit -m "Setup for Vercel deployment"
   git push origin main
   ```
2. Vercel will automatically deploy on push

### Option B: Manual Deploy
1. Go to Vercel Dashboard
2. Click **Deployments**
3. Click **Redeploy** on the latest deployment

## Step 4: Verify Deployment

Once deployed:
1. Visit your domain in browser
2. Check that all routes load (/, /admin, /packages, /experiences, etc.)
3. Test admin login: `/login`
4. Check Vercel Function Logs for any errors:
   - Deployments → [Your Deployment] → Runtime Logs

## Troubleshooting

### Still Getting 404?
- Check that DATABASE_URL is set correctly in Vercel Settings
- Verify NEXTAUTH_SECRET is set
- Check Runtime Logs for connection errors
- Ensure database has the required tables (run migrations)

### Database Connection Error?
- Verify DATABASE_URL format
- Check database server is accessible from Vercel (IP allowlist)
- Ensure database exists and is initialized with schema

### Auth Issues?
- Confirm NEXTAUTH_SECRET is set
- Verify NEXTAUTH_URL matches your domain
- Check that User table exists in database

## Key Files
- `prisma/schema.prisma` - Database schema
- `app/api/auth/[...nextauth]/route.ts` - Auth configuration
- `lib/prisma.ts` - Prisma client singleton

## Contact & Support
If issues persist, check:
1. Vercel Docs: https://vercel.com/docs
2. Next.js Docs: https://nextjs.org/docs
3. NextAuth Docs: https://next-auth.js.org
