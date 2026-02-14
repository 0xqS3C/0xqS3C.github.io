# Deployment Guide - 1n1t.me

Complete guide for deploying your Next.js portfolio with custom domain 1n1t.me.

## 🚀 Quick Start - GitHub Pages (RECOMMENDED)

Your site is configured for **automatic deployment** via GitHub Actions! Simply push to the main branch:

```bash
# If you're on the feature branch, merge to main
git checkout main
git merge copilot/complete-portfolio-rebuild
git push origin main

# Or push the current branch to trigger deployment
git push origin copilot/complete-portfolio-rebuild
```

The GitHub Actions workflow will automatically:
1. Install dependencies
2. Build the Next.js site
3. Deploy to GitHub Pages
4. Make it live at https://1n1t.me

---

## 📋 Table of Contents

1. [GitHub Pages Deployment](#github-pages-deployment) ⭐ **ACTIVE**
2. [Custom Domain Setup](#custom-domain-setup)
3. [DNS Configuration](#dns-configuration)
4. [Troubleshooting](#troubleshooting)

---

## GitHub Pages Deployment

### ✅ Already Configured!

Your repository is set up with:
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ CNAME file pointing to `1n1t.me`
- ✅ Static export configuration (`next.config.js`)
- ✅ Automatic builds on push

### How It Works

1. **Automatic Trigger**: Push to `main` or `copilot/complete-portfolio-rebuild` branch
2. **Build Process**: GitHub Actions runs `npm ci && npm run build`
3. **Deployment**: Static files from `/out` are deployed to GitHub Pages
4. **Live**: Site becomes available at `https://1n1t.me`

### Manual Deployment

If you need to manually trigger deployment:

1. Go to your repository on GitHub
2. Click "Actions" tab
3. Select "Deploy Next.js to GitHub Pages" workflow
4. Click "Run workflow" button
5. Select branch and click "Run workflow"

### First-Time Setup (If Needed)

If GitHub Pages isn't enabled:

1. Go to repository **Settings** → **Pages**
2. Under "Source", select **GitHub Actions**
3. Save the configuration
4. The workflow will run automatically on next push

---

## Custom Domain Setup

### Domain Configuration (1n1t.me)

Your CNAME file is already configured! It's located in:
- `public/CNAME` (source)
- `out/CNAME` (build output)

### Verify GitHub Pages Settings

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", you should see: `1n1t.me`
3. Ensure "Enforce HTTPS" is checked ✅

If the custom domain isn't set:
1. Enter `1n1t.me` in the custom domain field
2. Click "Save"
3. Wait for DNS check to complete

---

## DNS Configuration

### Required DNS Records

Configure these at your domain registrar (where you purchased 1n1t.me):

#### For Apex Domain (1n1t.me)

Add **4 A records** pointing to GitHub Pages IPs:

```
Type: A
Name: @ (or leave blank for root)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (or leave blank for root)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank for root)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank for root)
Value: 185.199.111.153
TTL: 3600
```

#### For WWW Subdomain (Optional)

```
Type: CNAME
Name: www
Value: 0xqS3C.github.io
TTL: 3600
```

### DNS Configuration by Provider

#### Namecheap
1. Log in → Domain List → Manage
2. Advanced DNS → Add New Record
3. Add all 4 A records as shown above
4. Add CNAME record for www (optional)

#### GoDaddy
1. Log in → My Products → Domains → DNS
2. Add records as shown above

#### Cloudflare
1. DNS tab → Add Record
2. Add records (set Proxy status to "DNS only" initially)
3. After DNS propagates, you can enable proxy

### Verify DNS Propagation

Check DNS propagation status:
- https://dnschecker.org (enter: 1n1t.me)
- https://www.whatsmydns.net (enter: 1n1t.me)

DNS typically propagates within:
- **10 minutes to 1 hour**: Most cases
- **Up to 48 hours**: Worst case

---

## HTTPS/TLS Setup

### Automatic HTTPS

GitHub Pages automatically provisions SSL certificates via Let's Encrypt.

**After DNS Propagates:**
1. Go to repository Settings → Pages
2. Check "Enforce HTTPS" ✅
3. Certificate will be issued automatically (may take a few minutes)

### Verify HTTPS

1. Visit `https://1n1t.me`
2. Check for padlock icon 🔒
3. Certificate should show "Issued by: Let's Encrypt"

---

## Troubleshooting

### Issue: Site Not Loading

**Solution:**
1. Verify GitHub Actions workflow completed successfully
   - Go to Actions tab in GitHub
   - Check latest workflow run
2. Verify DNS is pointing to GitHub Pages
   - Use `dig 1n1t.me` or https://dnschecker.org
3. Check GitHub Pages settings (Settings → Pages)

### Issue: Custom Domain Not Working

**Solution:**
1. Verify CNAME file exists in `out/` directory after build
2. Check DNS records are correctly configured
3. Wait for DNS propagation (up to 48 hours)
4. In GitHub Settings → Pages, remove and re-add custom domain

### Issue: HTTPS Certificate Not Issued

**Solution:**
1. Ensure DNS is fully propagated
2. Temporarily uncheck "Enforce HTTPS"
3. Wait 10-15 minutes
4. Re-check "Enforce HTTPS"

### Issue: 404 Errors on Navigation

**Solution:**
The Next.js static export handles this automatically with `trailingSlash: true` in `next.config.js`. All routes have `index.html` files.

If issues persist:
1. Clear browser cache
2. Check GitHub Actions build logs
3. Verify all pages generated in `out/` directory

### Issue: Build Fails in GitHub Actions

**Solution:**
1. Check Actions logs for specific error
2. Test build locally: `npm run build`
3. Ensure all dependencies are in `package.json`
4. Check Node.js version (workflow uses Node 20)

---

## Deployment Checklist

Before going live:

- [x] CNAME file configured (`public/CNAME`)
- [x] GitHub Actions workflow created
- [ ] DNS A records configured (at your domain registrar)
- [ ] DNS propagated (check dnschecker.org)
- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Custom domain added in GitHub Pages settings
- [ ] HTTPS enforced
- [ ] Site loads at https://1n1t.me
- [ ] All pages accessible
- [ ] Mobile responsive verified

---

## Updating the Site

### Content Updates

1. Edit content in `lib/config.ts`
2. Commit changes
3. Push to main branch
4. GitHub Actions auto-deploys (2-3 minutes)

### Adding New Features

1. Create feature branch
2. Make changes
3. Test locally: `npm run dev`
4. Build test: `npm run build`
5. Merge to main
6. Auto-deployment triggers

---

**Status**: ✅ Ready for automatic deployment via GitHub Actions

Push to trigger deployment and make your site live at https://1n1t.me! 🚀
