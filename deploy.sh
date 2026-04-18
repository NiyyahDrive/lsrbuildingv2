#!/bin/bash

echo "🚀 LSR Building V2 - Quick Vercel Deployment"
echo "=============================================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
fi

# Change to website-v2 directory
cd "$(dirname "$0")"

echo "📝 Preparing V2 for deployment..."
echo ""

# Verify build works
echo "🔨 Testing build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Fix errors and try again."
    exit 1
fi

echo ""
echo "✅ Build successful!"
echo ""
echo "🚀 Starting Vercel deployment..."
echo "   (Browser window will open for login if needed)"
echo ""

# Deploy to Vercel
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your V2 site is now live! 🎉"
echo "Check the URL above to verify."
