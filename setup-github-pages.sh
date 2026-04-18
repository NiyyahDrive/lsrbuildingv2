#!/bin/bash

echo "🚀 LSR Building V2 - GitHub Pages Setup"
echo "========================================"
echo ""

# Change to website-v2 directory
cd "$(dirname "$0")"

echo "📋 Step 1: Create new repository on GitHub"
echo "   URL: https://github.com/new"
echo "   Name: LSRBuilding-v2"
echo "   Description: LSR Building - Conversion Optimized (Staging)"
echo ""
echo "⏸️  Press ENTER once you've created the repo..."
read

# Remove old git config
echo "🔄 Reconfiguring git..."
git remote remove origin 2>/dev/null || true

# Add new remote
echo "📌 Adding GitHub remote..."
REPO_URL="https://github.com/NiyyahDrive/LSRBuilding-v2.git"
git remote add origin $REPO_URL

# Ensure we're on main branch
git branch -M main

echo "📝 Pushing code to GitHub..."
git push -u origin main

echo ""
echo "✅ Code pushed!"
echo ""
echo "🔧 Now enabling GitHub Pages:"
echo "   1. Go to: https://github.com/NiyyahDrive/LSRBuilding-v2/settings/pages"
echo "   2. Select 'Deploy from a branch'"
echo "   3. Branch: main | Folder: / (root)"
echo "   4. Click Save"
echo ""
echo "⏳ Pages will be live in 1-2 minutes at:"
echo "   https://niyyadrive.github.io/LSRBuilding-v2/"
echo ""
echo "Done! 🎉"
