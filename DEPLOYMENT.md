# LSR Building V2 - Deployment Instructions

## Snelle Setup voor Nieuwe Repository

### Option 1: Vercel (AANBEVOLEN - 2 minuten)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login (browser popup)
vercel login

# 3. Deploy V2
cd /Users/msabri/Documents/AI_Projects/MojoWebdesign/Projects/LSRBuilding/website-v2
vercel

# Follow prompts:
# - Link to existing project? No
# - Set project name: LSRBuilding-V2
# - Framework: Next.js
# - Build command: npm run build
# - Output: .next → ./out (already configured)
# - Deploy? Yes

# Result: https://lsrbuilding-v2.vercel.app
```

**Voordelen:**
- ✅ Deployment in 30 sec
- ✅ Preview URLs voor elke commit
- ✅ Automatic rollback
- ✅ Environment variables
- ✅ Analytics included
- ✅ Free tier available

---

### Option 2: GitHub Pages (Aparte Repo)

```bash
# 1. Create new repository on GitHub: "LSRBuilding-v2"
# 2. Initialize in website-v2 folder:

cd website-v2

# Remove old origin
git remote remove origin

# Add new origin
git remote add origin https://github.com/NiyyahDrive/LSRBuilding-v2.git

# Change branch to main
git branch -M main

# Push
git push -u origin main

# Enable GitHub Pages:
# - Go to https://github.com/NiyyahDrive/LSRBuilding-v2/settings/pages
# - Source: Deploy from branch
# - Branch: main
# - Folder: / (root)
# - Save

# Result: https://niyyadrive.github.io/LSRBuilding-v2/
```

---

### Option 3: Netlify (Alternative)

```bash
# 1. npm install -g netlify-cli
# 2. netlify login (browser popup)
# 3. netlify deploy --prod --dir=out

# Result: https://lsrbuilding-v2.netlify.app
```

---

## RECOMMENDED: Vercel Setup

**Stap 1: Login**
```bash
vercel login
```

**Stap 2: Deploy**
```bash
cd /Users/msabri/Documents/AI_Projects/MojoWebdesign/Projects/LSRBuilding/website-v2
vercel --prod
```

**Stap 3: Konfigureer Environment**
```bash
vercel env pull .env.local
# (Copy .env from website if needed)
```

**Stap 4: Set basePath**
Zorg dat `next.config.ts` correct staat:
```typescript
basePath: "", // Vercel host op root
```

---

## ✅ Checklist voor V2 Solo Deployment

- [ ] Vercel account (of kies GitHub Pages/Netlify)
- [ ] `website-v2/next.config.ts` heeft `basePath: ""`
- [ ] `website-v2/.env.local` geconfigureerd (if needed)
- [ ] Deploy command gerund
- [ ] Test live URL
- [ ] Share link met klant

---

## 🎯 Result

**V1 (Production):** https://niyyadrive.github.io/LSRBuilding/  
**V2 (Staging):** https://lsrbuilding-v2.vercel.app/ (after deployment)

Beide live en testbaar!

---

## Notes

- V2 source code blijft in `website-v2/` van main repo
- V2 deployment naar aparte hosting (Vercel/GitHub Pages)
- Easy rollback: één knop op Vercel
- Zero downtime deployments
- Preview URLs voor branches

**Klaar? Welke optie kies je?**
