# 🎯 Complete Setup & Deployment Guide

## 🚨 MOST IMPORTANT: You Need the Correct Branch!

**The Next.js portfolio is on:** `copilot/complete-portfolio-rebuild`

**NOT on:** `main`

If you're getting "file not found" errors, this is why! 👆

---

## ✅ Complete Setup (Copy & Paste These Commands)

Open **Terminal** (Mac/Linux) or **Git Bash** (Windows) and run:

```bash
# 1. Clone the repository
git clone https://github.com/0xqS3C/0xqS3C.github.io.git

# 2. Go into the folder
cd 0xqS3C.github.io

# 3. ⚠️ IMPORTANT: Switch to the correct branch
git checkout copilot/complete-portfolio-rebuild

# 4. Verify you're on the right branch (should show *)
git branch

# 5. Install dependencies
npm install

# 6. Build the site
npm run build

# 7. Deploy to GitHub Pages
./deploy-to-gh-pages.sh
```

**On Windows**, if step 7 doesn't work, try:
```bash
bash deploy-to-gh-pages.sh
```

---

## 🔍 Quick Verification

After step 3 (checkout), verify files exist:

```bash
ls package.json deploy-to-gh-pages.sh app/ components/
```

You should see all these listed. If not, you're on the wrong branch!

---

## ⚙️ After Deployment

Once the script completes, go to GitHub:

### 1. Enable GitHub Pages
- Go to: https://github.com/0xqS3C/0xqS3C.github.io/settings/pages
- Under "Build and deployment":
  - Source: **Deploy from a branch**
  - Branch: **gh-pages**
  - Folder: **/ (root)**
- Click **Save**

### 2. Set Custom Domain (Optional)
- In the same page, under "Custom domain":
  - Enter: **1n1t.me**
  - Click **Save**

### 3. Configure DNS (at your domain registrar)
Add these **4 A records** for your domain:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### 4. Enable HTTPS
- After DNS propagates (10 min - 48 hours)
- Go back to GitHub Pages settings
- Check **"Enforce HTTPS"**

---

## 🎉 Your Site Will Be Live!

- **GitHub URL:** https://0xqs3c.github.io
- **Custom Domain:** https://1n1t.me (after DNS setup)

---

## ❌ Troubleshooting

### "File not found" or "No such file"

**Solution 1:** Make sure you're on the correct branch
```bash
git checkout copilot/complete-portfolio-rebuild
git branch  # Should show * next to the branch name
```

**Solution 2:** Make sure you're in the repository folder
```bash
pwd  # Should show: .../0xqS3C.github.io
cd 0xqS3C.github.io  # If you're not there
```

**Solution 3:** Pull latest changes
```bash
git fetch origin
git checkout copilot/complete-portfolio-rebuild
git pull origin copilot/complete-portfolio-rebuild
```

### "npm: command not found"

**You need Node.js installed:**
1. Go to https://nodejs.org/
2. Download and install LTS version
3. Restart Terminal
4. Try again

### "git: command not found"

**You need Git installed:**
- Mac: https://git-scm.com/
- Windows: https://git-scm.com/download/win
- Linux: `sudo apt-get install git`

### "./deploy-to-gh-pages.sh: Permission denied"

```bash
chmod +x deploy-to-gh-pages.sh
./deploy-to-gh-pages.sh
```

### Still having issues?

See **`TROUBLESHOOTING.md`** for detailed solutions to all common problems.

---

## 📚 Documentation Files

- **COMPLETE-SETUP-GUIDE.md** ⭐ You are here - Complete walkthrough
- **START-HERE.md** - Quick start guide
- **TROUBLESHOOTING.md** - Problem solutions
- **HOW-TO-DEPLOY.md** - Deployment details
- **DESIGN-COMPLETE.md** - What's new in the design
- **UPDATE-SUMMARY.md** - Content updates

---

## 🎯 Quick Reference

**Just want the commands?**
```bash
git clone https://github.com/0xqS3C/0xqS3C.github.io.git
cd 0xqS3C.github.io
git checkout copilot/complete-portfolio-rebuild
npm install
npm run build && ./deploy-to-gh-pages.sh
```

**Verify setup:**
```bash
git branch                    # Shows current branch
pwd                          # Shows current directory
ls package.json              # Checks file exists
node --version               # Checks Node.js installed
```

**Need help?**
- See `TROUBLESHOOTING.md`
- Check you're on `copilot/complete-portfolio-rebuild` branch
- Make sure you ran `git checkout copilot/complete-portfolio-rebuild`

---

## ✨ That's It!

Your modern Next.js portfolio will be deployed to GitHub Pages and accessible at your custom domain!
