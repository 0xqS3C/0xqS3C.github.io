# 🚀 HOW TO DEPLOY - Step by Step

## Where to Run the Commands?

**Run these commands on YOUR LOCAL COMPUTER** (not in GitHub, not in any cloud environment).

## Prerequisites

Before you start, make sure you have:
- ✅ Git installed on your computer
- ✅ Node.js installed (version 18 or higher)
- ✅ Terminal/Command Prompt access

## Step-by-Step Deployment Guide

### Step 1: Open Terminal

**On Windows:**
- Press `Windows Key + R`
- Type `cmd` or `powershell` and press Enter

**On Mac/Linux:**
- Press `Cmd + Space` (Mac) or `Ctrl + Alt + T` (Linux)
- Type `terminal` and press Enter

### Step 2: Navigate to a Folder

Choose where you want to work. For example:

```bash
# On Windows
cd C:\Users\YourUsername\Documents

# On Mac/Linux
cd ~/Documents
```

### Step 3: Clone Your Repository

```bash
git clone https://github.com/0xqS3C/0xqS3C.github.io.git
cd 0xqS3C.github.io
```

### Step 4: Switch to the New Branch

```bash
git checkout copilot/complete-portfolio-rebuild
```

### Step 5: Install Dependencies

```bash
npm install
```

This will take a minute or two. You'll see a progress bar.

### Step 6: Deploy!

Now run the deployment command:

```bash
npm run build && ./deploy-to-gh-pages.sh
```

**On Windows, if the script doesn't work, run this instead:**

```bash
npm run build
git config user.email "QHaddad@stud.jubilee.edu.jo"
git config user.name "Qusai"
git checkout --orphan gh-pages
git rm -rf .
xcopy out\* . /E /H /Y
echo 1n1t.me > CNAME
type nul > .nojekyll
git add .
git commit -m "Deploy Next.js portfolio"
git push -f origin gh-pages
git checkout copilot/complete-portfolio-rebuild
```

### Step 7: Enable GitHub Pages

1. Go to: https://github.com/0xqS3C/0xqS3C.github.io/settings/pages
2. Under "Source", select: **Deploy from a branch**
3. Under "Branch", select: **gh-pages** and **/ (root)**
4. Click **Save**

### Step 8: Wait a Few Minutes

Your site will be building. After 2-3 minutes, visit:
- **https://0xqS3C.github.io** (GitHub URL)
- **https://1n1t.me** (your custom domain, if DNS is configured)

## What Each Command Does

```bash
npm install                 # Downloads all required packages
npm run build              # Builds your Next.js site into static HTML
./deploy-to-gh-pages.sh   # Deploys to GitHub Pages
```

## Troubleshooting

### "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org

### "git: command not found"
**Solution:** Install Git from https://git-scm.com

### "Permission denied" on script
**Solution:** Make the script executable:
```bash
chmod +x deploy-to-gh-pages.sh
```

### Script doesn't work on Windows
**Solution:** Use the manual commands shown in Step 6 (Windows version)

### "Author identity unknown"
**Solution:** The script handles this automatically, but if you see this error, run:
```bash
git config user.email "QHaddad@stud.jubilee.edu.jo"
git config user.name "Qusai"
```

## Quick Reference

**Where am I?** Check your current directory:
```bash
pwd          # Mac/Linux
cd           # Windows
```

**Am I in the right folder?** You should see files like `package.json`, `app/`, `components/`
```bash
ls           # Mac/Linux  
dir          # Windows
```

---

## Summary

1. **Clone** the repository to your computer
2. **Navigate** to the repository folder (`cd 0xqS3C.github.io`)
3. **Checkout** the branch (`git checkout copilot/complete-portfolio-rebuild`)
4. **Install** dependencies (`npm install`)
5. **Deploy** (`npm run build && ./deploy-to-gh-pages.sh`)
6. **Enable** GitHub Pages in repository settings
7. **Visit** your site!

**You run everything from your LOCAL terminal, in the repository folder!** 🎉
