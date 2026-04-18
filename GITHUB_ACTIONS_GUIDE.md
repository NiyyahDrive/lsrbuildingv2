# GitHub Actions CI/CD Deployment Guide

## Overview
Your Next.js 14 project now deploys automatically to GitHub Pages using GitHub Actions. Every push to `main` triggers:
1. **Build** - Compiles your Next.js app to static files in `/out`
2. **Deploy** - Uploads those files to the `gh-pages` branch
3. **Publish** - Makes them live at https://niyyadrive.github.io/lsrbuildingv2/

---

## Configuration Files Explained

### 1. **next.config.ts** ✅ Already Configured
```typescript
const nextConfig: NextConfig = {
  basePath: "/lsrbuildingv2",        // URL subdirectory
  output: "export",                  // Generate static files
  images: { unoptimized: true },    // Required for GitHub Pages
};
```

**Why this matters:**
- `output: "export"` → Generates `/out` folder with HTML/CSS/JS (no server needed)
- `images: { unoptimized: true }` → GitHub Pages can't optimize images, so we disable it
- `basePath: "/lsrbuildingv2"` → Sites you at `/lsrbuildingv2` subdirectory, not root

### 2. **package.json Scripts** ✅ Ready
```json
"scripts": {
  "build": "next build",      // Runs build → creates /out
  "deploy": "gh-pages -d out" // Optional manual deploy
}
```

### 3. **.github/workflows/deploy.yml** ✅ NEW PROFESSIONAL WORKFLOW

**What happens:**

| Step | Action | Time |
|------|--------|------|
| 1. Checkout | Clones your repo | 5 sec |
| 2. Setup Node.js 20 | Installs runtime | 30 sec |
| 3. npm ci | Installs dependencies (faster than npm install) | 1-2 min |
| 4. npm run build | Generates static files in `/out` | 1-2 min |
| 5. Upload artifact | Packages `/out` folder | 30 sec |
| 6. Deploy to Pages | Publishes to gh-pages branch | 1 min |
| **Total** | | **4-6 minutes** |

---

## Monitor Your Deployment

### **Real-time Status:**
1. Go to: https://github.com/NiyyahDrive/lsrbuildingv2/actions
2. Watch the workflow run in real-time
3. Green ✅ = Success | Red ❌ = Failed

### **Check Deployment Logs:**
- Click the workflow run
- Click the "build" or "deploy" job to see detailed logs
- Errors will show here (very helpful for debugging)

### **Verify Live Site:**
```bash
# Hard refresh (Cmd+Shift+R):
https://niyyadrive.github.io/lsrbuildingv2/

# Should see your Alrubaei Werken page within 2-3 minutes
```

---

## How It Works (Deep Dive)

### **Trigger:**
```yaml
on:
  push:
    branches:
      - main           # Triggers on ANY push to main
  workflow_dispatch:   # Also allows manual trigger from GitHub UI
```

### **Permissions:**
```yaml
permissions:
  contents: read        # Read your code
  pages: write         # Write to GitHub Pages
  id-token: write      # Secure deployment token
```

### **Build Process:**
```yaml
- name: Install Dependencies
  run: npm ci           # Clean install (uses package-lock.json)

- name: Build Static Export
  run: npm run build    # Generates /out with Next.js static export
  env:
    CI: true          # Tells Next.js it's CI environment
```

### **Deployment:**
```yaml
- name: Upload Pages Artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./out       # Takes /out folder only (no node_modules!)

- name: Deploy to GitHub Pages
  uses: actions/deploy-pages@v4  # Pushes to gh-pages branch automatically
```

---

## GitHub Pages Configuration ⚙️

**Must be set to "GitHub Actions":**

1. Settings → Pages
2. Source: **GitHub Actions** (NOT "Deploy from a branch")
3. Save

This tells GitHub: "Wait for Actions to provide the files, don't look at branches manually"

---

## Troubleshooting

### **Issue: Workflow runs but page shows 404**
- **Solution:** Wait 2-3 minutes (GitHub Pages CDN propagation)
- **Check:** https://github.com/NiyyahDrive/lsrbuildingv2/actions
- **Look for:** Green checkmark on latest run

### **Issue: Workflow fails with npm error**
- **Check logs:** Click the failed job in Actions
- **Common fix:** `npm ci` vs `npm install` (we use `ci` which is safer)

### **Issue: Static files not updating**
- **Solution:** Hard refresh (Cmd+Shift+R) - browser caches old files
- **Alternative:** Open in private/incognito window

### **Issue: basePath breaking site**
- **Verify:** `next.config.ts` has `basePath: "/lsrbuildingv2"`
- **Check:** Site accessed at full path: `https://niyyadrive.github.io/lsrbuildingv2/`
- **Not:** `https://niyyadrive.github.io/`

---

## Making Changes (Workflow)

**From now on, your deployment is automatic:**

```bash
# 1. Make code changes
vim src/components/HeroSection.tsx

# 2. Commit and push
git add .
git commit -m "Update: Hero section text"
git push origin main

# 3. Automatic deployment triggers!
# → Workflow runs in ~4-6 minutes
# → Site updates automatically
# → No manual branch pushing needed
```

**No more:**
- ❌ Creating orphan gh-pages branches
- ❌ Copying files manually
- ❌ Fighting with node_modules sizes
- ❌ Force pushing static files

---

## Performance Notes

**Build time breakdown:**
- Dependencies install: 1-2 minutes (cached on 2nd run)
- Next.js build: 1-2 minutes
- Upload & deploy: 1 minute

**Cache:** GitHub Actions automatically caches `node_modules` between runs, so:
- 1st deployment: ~5-6 minutes
- 2nd+ deployments: ~2-3 minutes (faster!)

---

## Manual Deployment (Fallback)

If GitHub Actions fails for any reason, you can still deploy manually:

```bash
npm run build
npm run deploy  # Uses gh-pages package to push /out to gh-pages branch
```

But this should **never be needed** with the new workflow.

---

## Summary

✅ **Configuration:** Already perfect (next.config.ts is correct)
✅ **Workflow:** Professional CI/CD pipeline ready
✅ **Auto-deploy:** Every git push to `main` now triggers deployment
✅ **No manual steps:** Forget about gh-pages branches—it's automatic
✅ **Monitoring:** Check progress at https://github.com/NiyyahDrive/lsrbuildingv2/actions

**Your V2 site:** https://niyyadrive.github.io/lsrbuildingv2/ (live in 4-6 min after each push)
