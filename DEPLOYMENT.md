# Deployment Guide - 1n1t.me

Complete guide for deploying your Next.js portfolio to Vercel with custom domain configuration.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Vercel Deployment](#vercel-deployment)
3. [Custom Domain Setup](#custom-domain-setup)
4. [DNS Configuration](#dns-configuration)
5. [HTTPS/TLS Setup](#httpstls-setup)
6. [Troubleshooting](#troubleshooting)
7. [Environment Variables](#environment-variables)

---

## Prerequisites

Before deploying, ensure you have:

- [x] GitHub account with repository access
- [x] Vercel account (free tier works perfectly)
- [x] Domain name (1n1t.me)
- [x] Access to domain DNS settings
- [x] Local build test passed (`npm run build`)

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Sign in to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New Project"
   - Select your repository: `0xqS3C/0xqS3C.github.io`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `out` (configured in next.config.js)
   
4. **Environment Variables** (Optional)
   - Add any environment variables from `.env.local.example`
   - Click "Add" for each variable

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build completion
   - You'll get a temporary URL: `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Root**
   ```bash
   cd /path/to/0xqS3C.github.io
   vercel
   ```

4. **Follow CLI Prompts**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time)
   - Project name? Use default or customize
   - In which directory? `./`
   - Override settings? **N**

5. **Production Deployment**
   ```bash
   vercel --prod
   ```

---

## Custom Domain Setup

### Step 1: Add Domain in Vercel

1. Go to your project dashboard in Vercel
2. Click **Settings** → **Domains**
3. Enter your domain: `1n1t.me`
4. Click **Add**

### Step 2: Configure Subdomain (Optional)

If you also want `www.1n1t.me`:
1. Add another domain: `www.1n1t.me`
2. Set it to redirect to `1n1t.me`

---

## DNS Configuration

Configure your DNS records at your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare).

### Required DNS Records

#### For Root Domain (1n1t.me)

**A Record:**
```
Type: A
Name: @ (or leave blank for root)
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

**Alternative: ALIAS/ANAME Record** (if your provider supports it)
```
Type: ALIAS or ANAME
Name: @ (or leave blank)
Value: cname.vercel-dns.com
TTL: 3600
```

#### For WWW Subdomain (www.1n1t.me)

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Example DNS Configuration

| Type  | Name | Value                  | TTL  |
|-------|------|------------------------|------|
| A     | @    | 76.76.21.21           | 3600 |
| CNAME | www  | cname.vercel-dns.com  | 3600 |

### DNS Provider-Specific Instructions

#### Namecheap
1. Log in to Namecheap
2. Go to "Domain List" → Select your domain
3. Click "Advanced DNS"
4. Add A Record and CNAME as specified above

#### GoDaddy
1. Log in to GoDaddy
2. Go to "My Products" → "Domains"
3. Click "DNS" next to your domain
4. Add records as specified above

#### Cloudflare
1. Log in to Cloudflare
2. Select your domain
3. Go to "DNS" tab
4. Add records with **Proxy status: DNS only** (orange cloud OFF)
5. After verification, you can enable proxy (orange cloud ON)

---

## HTTPS/TLS Setup

Vercel automatically provisions SSL certificates via Let's Encrypt.

### Automatic HTTPS

1. **After DNS Propagation** (10 minutes - 48 hours)
   - Vercel will automatically detect DNS changes
   - SSL certificate will be provisioned
   - HTTPS will be enabled automatically

2. **Force HTTPS Redirect**
   - Already configured in `vercel.json`
   - All HTTP traffic redirects to HTTPS

3. **Verify HTTPS**
   - Visit `https://1n1t.me`
   - Check for padlock icon in browser
   - Certificate should show "Let's Encrypt"

### Manual Certificate Renewal

Vercel handles this automatically. Certificates auto-renew before expiration.

---

## Troubleshooting

### Issue: Domain Not Connecting

**Solution:**
1. Check DNS propagation: [dnschecker.org](https://dnschecker.org)
2. Verify A record points to: `76.76.21.21`
3. Wait 24-48 hours for full DNS propagation
4. Clear browser cache

### Issue: SSL Certificate Not Provisioning

**Solution:**
1. Ensure DNS is properly configured
2. Wait for DNS propagation (up to 48 hours)
3. In Vercel dashboard, try removing and re-adding domain
4. Check that CAA records (if any) allow Let's Encrypt

### Issue: Build Fails

**Solution:**
1. Check build logs in Vercel dashboard
2. Test local build: `npm run build`
3. Verify all dependencies in `package.json`
4. Check TypeScript errors: `npm run lint`

### Issue: 404 on All Pages

**Solution:**
1. Verify `output: 'export'` in `next.config.js`
2. Check `trailingSlash: true` in `next.config.js`
3. Rebuild and redeploy

### Issue: Fonts Not Loading

**Solution:**
1. Check Google Fonts URL in `app/layout.tsx`
2. Verify network access to fonts.googleapis.com
3. Consider self-hosting fonts if issues persist

---

## Environment Variables

### Production Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

```env
NEXT_PUBLIC_SITE_URL=https://1n1t.me
NEXT_PUBLIC_SITE_NAME=1n1t.tech
NEXT_PUBLIC_EMAIL=QHaddad@stud.jubilee.edu.jo
NEXT_PUBLIC_GITHUB=https://github.com/0xqS3C
NEXT_PUBLIC_INSTAGRAM=https://instagram.com/_1n1t_
```

**Note:** All variables starting with `NEXT_PUBLIC_` are exposed to the browser.

### Setting Variables in Vercel

1. Go to Project Settings
2. Click "Environment Variables"
3. Add each variable:
   - **Key**: Variable name
   - **Value**: Variable value
   - **Environment**: Select "Production", "Preview", and "Development"
4. Click "Save"
5. Redeploy to apply changes

---

## Deployment Checklist

Before going live, verify:

- [ ] Local build succeeds: `npm run build`
- [ ] All pages load correctly in development
- [ ] TypeScript compilation succeeds
- [ ] No console errors
- [ ] DNS records configured correctly
- [ ] Domain added in Vercel
- [ ] SSL certificate provisioned
- [ ] Environment variables set (if needed)
- [ ] Meta tags and SEO configured
- [ ] Favicon appears correctly
- [ ] Mobile responsive design works
- [ ] Navigation and links work
- [ ] Contact forms/links functional

---

## Continuous Deployment

### Automatic Deployments

Once connected, Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches
- **Preview**: Every pull request

### Manual Deployment

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel
```

### Deployment Hooks

Create webhook for manual deployments:
1. Vercel Dashboard → Settings → Git
2. Create Deploy Hook
3. Use webhook URL to trigger deployments

---

## Performance Optimization

Your deployment is already optimized with:

- ✅ Static site generation (SSG)
- ✅ Automatic code splitting
- ✅ Image optimization (when images added)
- ✅ CDN distribution (Vercel Edge Network)
- ✅ Brotli/Gzip compression
- ✅ HTTP/2 support
- ✅ Caching headers configured

### Verify Performance

Use these tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

Target metrics:
- Lighthouse Performance: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

---

## Support

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
3. Vercel Support: support@vercel.com
4. GitHub Issues: [Create an issue](https://github.com/0xqS3C/0xqS3C.github.io/issues)

---

**Deployed with ♥ by 1n1t**
