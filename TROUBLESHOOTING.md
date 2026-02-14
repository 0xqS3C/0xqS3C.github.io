# 🔧 Troubleshooting Guide

## "File Not Found" or "Can't Find Files"

### Problem 1: Wrong Branch ⚠️ (Most Common!)

The new Next.js portfolio is **NOT on the main branch**. It's on `copilot/complete-portfolio-rebuild`.

**How to check:**
```bash
git branch
```

**You should see:**
```
* copilot/complete-portfolio-rebuild
```

**If you see:**
```
* main
```

**Fix it:**
```bash
git checkout copilot/complete-portfolio-rebuild
```

---

### Problem 2: Wrong Directory

You might be in the wrong folder.

**How to check:**
```bash
pwd
```

**You should see something like:**
```
/Users/yourname/0xqS3C.github.io
```
or
```
C:\Users\yourname\0xqS3C.github.io
```

**If you're in a different folder:**
```bash
cd 0xqS3C.github.io
```

---

### Problem 3: Haven't Cloned the Repo

**Symptom:** "No such file or directory" when trying to `cd 0xqS3C.github.io`

**Fix:**
```bash
git clone https://github.com/0xqS3C/0xqS3C.github.io.git
cd 0xqS3C.github.io
git checkout copilot/complete-portfolio-rebuild
```

---

### Problem 4: Haven't Pulled Latest Changes

**If files are missing after checkout:**
```bash
git fetch origin
git checkout copilot/complete-portfolio-rebuild
git pull origin copilot/complete-portfolio-rebuild
```

---

## Deployment Issues

### "npm: command not found"

**Cause:** Node.js is not installed.

**Fix:**
1. Install Node.js from https://nodejs.org/
2. Choose LTS version (recommended)
3. After installation, restart Terminal
4. Verify: `node --version` and `npm --version`

---

### "git: command not found"

**Cause:** Git is not installed.

**Fix:**
- **Mac:** Install from https://git-scm.com/ or use `brew install git`
- **Windows:** Install from https://git-scm.com/download/win
- **Linux:** `sudo apt-get install git` or `sudo yum install git`

---

### "./deploy-to-gh-pages.sh: Permission denied"

**Fix:**
```bash
chmod +x deploy-to-gh-pages.sh
./deploy-to-gh-pages.sh
```

---

### "./deploy-to-gh-pages.sh: No such file or directory" (Windows)

**Cause:** Windows doesn't recognize `.sh` files by default.

**Fix 1 - Use Git Bash:**
```bash
bash deploy-to-gh-pages.sh
```

**Fix 2 - Use WSL:**
```bash
wsl bash deploy-to-gh-pages.sh
```

---

### "fatal: Not a git repository"

**Cause:** You're not in a git repository folder.

**Fix:**
```bash
cd 0xqS3C.github.io
git status  # Verify you're in the repo
```

---

### "Author identity unknown"

**Cause:** Git doesn't know who you are.

**Fix:**
```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

---

## Build Issues

### "Error: Cannot find module"

**Cause:** Dependencies not installed.

**Fix:**
```bash
npm install
```

---

### Build fails or hangs

**Fix 1 - Clear cache and rebuild:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Fix 2 - Clear Next.js cache:**
```bash
rm -rf .next
npm run build
```

---

## Verification Commands

**Check if you're in the right place:**
```bash
# Show current directory
pwd

# Show current branch
git branch

# List key files
ls package.json deploy-to-gh-pages.sh app/ components/

# On Windows:
dir package.json deploy-to-gh-pages.sh
```

**All should return successfully if you're in the right place!**

---

## Complete Reset (Last Resort)

If nothing works, start completely fresh:

```bash
# Go to parent directory
cd ..

# Remove the repo
rm -rf 0xqS3C.github.io

# Clone fresh
git clone https://github.com/0xqS3C/0xqS3C.github.io.git
cd 0xqS3C.github.io

# Checkout correct branch
git checkout copilot/complete-portfolio-rebuild

# Install and build
npm install
npm run build

# Deploy
./deploy-to-gh-pages.sh
```

---

## Still Stuck?

1. ✅ Read `START-HERE.md` for correct setup steps
2. ✅ Make sure you're on `copilot/complete-portfolio-rebuild` branch
3. ✅ Verify files exist: `ls package.json`
4. ✅ Check you have Node.js: `node --version`
5. ✅ Check you have Git: `git --version`

**Double-check the branch!** 90% of "file not found" issues are from being on the wrong branch.
