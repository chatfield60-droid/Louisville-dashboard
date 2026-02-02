# Louisville Basketball Dashboard - Vercel Deploy Guide

## What's in this folder
```
louisville-deploy/
├── package.json          (project config)
├── next.config.js        (Next.js config)
├── tailwind.config.js    (Tailwind CSS config)
├── postcss.config.js     (CSS processing)
├── .gitignore            (tells git what to skip)
└── app/
    ├── globals.css       (Tailwind imports)
    ├── layout.jsx        (page wrapper)
    └── page.jsx          (YOUR DASHBOARD - this is the main file)
```

---

## OPTION A: Deploy via GitHub (recommended - easiest updates later)

### Step 1: Create a GitHub account (skip if you have one)
- Go to https://github.com and sign up

### Step 2: Create a new repository
- Click the green **"New"** button (or go to https://github.com/new)
- Name it: `louisville-dashboard`
- Keep it **Private**
- Click **"Create repository"**

### Step 3: Upload files
- On the repo page, click **"uploading an existing file"**
- Drag the ENTIRE contents of this folder into the upload area
  - Make sure the `app/` folder structure is preserved
  - You should see: package.json, next.config.js, tailwind.config.js, postcss.config.js, app/globals.css, app/layout.jsx, app/page.jsx
- Click **"Commit changes"**

### Step 4: Deploy on Vercel
- Go to https://vercel.com and click **"Sign Up"** → sign in with GitHub
- Click **"Add New Project"**
- Find `louisville-dashboard` in the list → click **"Import"**
- Leave all settings as default (it auto-detects Next.js)
- Click **"Deploy"**
- Wait ~60 seconds. Done. You get a live URL like `louisville-dashboard.vercel.app`

### Updating later
- To update the dashboard, just replace `app/page.jsx` in GitHub
- Vercel auto-redeploys on every push

---

## OPTION B: Deploy via Vercel CLI (if you want to skip GitHub entirely)

### Step 1: Install Node.js
- Go to https://nodejs.org → download the LTS version → install it

### Step 2: Install Vercel CLI
- Open Terminal (Mac) or Command Prompt (Windows)
- Run: `npm install -g vercel`

### Step 3: Deploy
- In Terminal, navigate to this folder:
  ```
  cd /path/to/louisville-deploy
  ```
- Run:
  ```
  vercel
  ```
- It will ask you to log in (opens browser)
- Then asks some questions - just hit Enter for all defaults
- Done. It gives you a live URL.

### Updating later
- Replace `app/page.jsx` with the new version
- Run `vercel` again from the same folder

---

## OPTION C: One-click via Vercel drag-and-drop (simplest but less control)

### Step 1: Build locally first
- Install Node.js from https://nodejs.org
- Open Terminal, navigate to this folder
- Run:
  ```
  npm install
  npm run build
  ```
- This creates a `.next` folder

### Step 2: Deploy the build
- Go to https://vercel.com → sign up
- Drag the entire project folder onto the Vercel dashboard
- Done.

---

## Troubleshooting
- **"Module not found"**: Make sure the `app/` folder uploaded correctly with all 3 files inside it
- **Build fails**: Check that page.jsx starts with `"use client";` on line 1
- **Blank page**: Check browser console (F12) for errors
- **Want to update**: Just replace app/page.jsx and redeploy
