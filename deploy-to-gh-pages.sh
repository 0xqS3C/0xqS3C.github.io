#!/bin/bash
set -e

echo "🚀 Deploying Next.js Portfolio to GitHub Pages"
echo "================================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the repository root."
    exit 1
fi

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Error: Build output not found. Please run 'npm run build' first."
    exit 1
fi

echo "✅ Build output found"
echo ""

# Configure git identity if not already set
GIT_EMAIL=$(git config user.email 2>/dev/null || echo "")
GIT_NAME=$(git config user.name 2>/dev/null || echo "")

if [ -z "$GIT_EMAIL" ] || [ -z "$GIT_NAME" ]; then
    echo "⚙️  Configuring git identity..."
    git config user.email "QHaddad@stud.jubilee.edu.jo"
    git config user.name "Qusai"
    echo "✅ Git identity configured"
else
    echo "✅ Git identity already configured:"
    echo "   Name: $GIT_NAME"
    echo "   Email: $GIT_EMAIL"
fi

echo ""
echo "📦 Creating gh-pages branch..."

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)

# Create orphan gh-pages branch
git checkout --orphan gh-pages 2>/dev/null || git checkout gh-pages

# Remove all files from git
git rm -rf . 2>/dev/null || true

# Copy build output
echo "📋 Copying build files..."
cp -r out/* .

# Create CNAME for custom domain
echo "1n1t.me" > CNAME
echo "✅ CNAME created"

# Create .nojekyll for GitHub Pages
touch .nojekyll
echo "✅ .nojekyll created"

# Stage all files
echo "➕ Staging files..."
git add .

# Commit
echo "💾 Committing..."
git commit -m "Deploy Next.js portfolio to GitHub Pages

Automated deployment of static site
- Built from Next.js 15 application
- Custom domain: 1n1t.me
- All pages pre-rendered
- Total size: 1.3 MB
"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -f origin gh-pages

echo ""
echo "✅ ✅ ✅ DEPLOYMENT SUCCESSFUL! ✅ ✅ ✅"
echo ""
echo "📋 Next steps:"
echo "1. Go to: https://github.com/0xqS3C/0xqS3C.github.io/settings/pages"
echo "2. Under 'Build and deployment':"
echo "   - Source: Deploy from a branch"
echo "   - Branch: gh-pages"
echo "   - Folder: / (root)"
echo "3. Click 'Save'"
echo ""
echo "4. Configure custom domain:"
echo "   - Custom domain: 1n1t.me"
echo "   - Click 'Save'"
echo ""
echo "5. Add DNS A records at your domain registrar:"
echo "   - 185.199.108.153"
echo "   - 185.199.109.153"
echo "   - 185.199.110.153"
echo "   - 185.199.111.153"
echo ""
echo "6. Wait for DNS propagation (10 min - 48 hours)"
echo "7. Enable 'Enforce HTTPS' in GitHub Pages settings"
echo ""
echo "🎉 Your site will be live at: https://1n1t.me"
echo ""

# Switch back to original branch
echo "🔄 Switching back to $CURRENT_BRANCH branch..."
git checkout "$CURRENT_BRANCH"

echo ""
echo "✨ All done! Your site is deployed!"
