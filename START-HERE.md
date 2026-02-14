# 🚀 START HERE - Complete Setup Guide

## ⚠️ IMPORTANT: Read This First!

The new Next.js portfolio is on the **`copilot/complete-portfolio-rebuild`** branch.

If you're getting "file not found" errors, you're probably on the wrong branch!

---

## ✅ Correct Setup Steps

### Step 1: Clone the Repository

Open Terminal (Mac/Linux) or Command Prompt (Windows) and run:

```bash
git clone https://github.com/0xqS3C/0xqS3C.github.io.git
cd 0xqS3C.github.io
```

### Step 2: ⚠️ CHECKOUT THE CORRECT BRANCH

**This is the most important step!**

```bash
git checkout copilot/complete-portfolio-rebuild
```

### Step 3: Verify You're on the Right Branch

```bash
git branch
```

You should see:
```
* copilot/complete-portfolio-rebuild
```

The `*` means that's your current branch.

### Step 4: Verify Files Exist

```bash
# On Mac/Linux:
ls package.json deploy-to-gh-pages.sh

# On Windows:
dir package.json deploy-to-gh-pages.sh
```

You should see both files listed. If not, see `TROUBLESHOOTING.md`.

### Step 5: Install Dependencies

```bash
npm install
```

Wait for it to complete (takes about 1-2 minutes).

### Step 6: Build and Deploy

```bash
npm run build && ./deploy-to-gh-pages.sh
```

**On Windows**, if the above doesn't work:
```bash
npm run build
bash deploy-to-gh-pages.sh
```

---

## 🎯 Quick Reference

**I just cloned the repo, what now?**
```bash
cd 0xqS3C.github.io
git checkout copilot/complete-portfolio-rebuild
npm install
npm run build && ./deploy-to-gh-pages.sh
```

**I'm getting "file not found"**
- Check you ran: `git checkout copilot/complete-portfolio-rebuild`
- Run: `git branch` to verify
- See `TROUBLESHOOTING.md`

**I want to see what's changed**
- See `DESIGN-COMPLETE.md` for design updates
- See `UPDATE-SUMMARY.md` for content changes

**Ready to deploy?**
- See `HOW-TO-DEPLOY.md` for detailed steps
- See `WHERE-TO-RUN.md` for quick reference

---

## 📁 File Structure

After checkout, you should see:
- ✅ `package.json` - Node.js configuration
- ✅ `deploy-to-gh-pages.sh` - Deployment script
- ✅ `app/` - Next.js pages
- ✅ `components/` - React components
- ✅ `lib/` - Configuration and data

If you don't see these, you're on the wrong branch!

---

## ❓ Still Having Issues?

See **`TROUBLESHOOTING.md`** for common problems and solutions.
