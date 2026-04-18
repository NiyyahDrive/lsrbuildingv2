# 🚀 V2 naar GitHub Pages - Setup Instructies

## Stap 1: Maak nieuwe repo aan

1. Ga naar: https://github.com/new
2. **Repository name:** `LSRBuilding-v2`
3. **Description:** LSR Building - Conversion Optimized (Staging)
4. **Visibility:** Public
5. **Initialize with:** NIETS aankruisen (we hebben al content)
6. Klik **"Create repository"**

---

## Stap 2: Push V2 code

Zodra repo is aangemaakt, run:

```bash
cd /Users/msabri/Documents/AI_Projects/MojoWebdesign/Projects/LSRBuilding/website-v2
git push -u origin main
```

(GitHub zal je mogelijk vragen om te authenticeren - volg de prompts)

---

## Stap 3: Enable GitHub Pages

1. Ga naar: https://github.com/NiyyahDrive/LSRBuilding-v2/settings/pages
2. Under **"Build and deployment"**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)`
3. Klik **"Save"**
4. Wacht 1-2 minuten...

---

## ✅ Result

Je V2 site is live op:
**https://niyyadrive.github.io/LSRBuilding-v2/**

---

## 🎬 Quick Commands

```bash
# Go to V2 folder
cd /Users/msabri/Documents/AI_Projects/MojoWebdesign/Projects/LSRBuilding/website-v2

# Check git status
git status

# Push to GitHub
git push -u origin main

# Check remote
git remote -v
```

---

**Wat is je status? Heb je de repo al aangemaakt op GitHub?**
