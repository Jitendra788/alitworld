# alitworld.com — Hostinger Node.js par live

Aapke panel mein **Websites → Node.js** hai — yahi use karenge.

Official guide: [Hostinger Node.js deploy](https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/)

---

## Step 1 — Code GitHub par (PC par)

PowerShell:

```powershell
cd e:\Alitworld
git init
git add .
git commit -m "Alitworld website ready for deploy"
```

GitHub.com → **New repository** → name: `alitworld` → Create

```powershell
git remote add origin https://github.com/APNA_USERNAME/alitworld.git
git branch -M main
git push -u origin main
```

`.env.local` git mein nahi jayega (safe).

---

## Step 2 — Hostinger par Node.js app banao

1. **hPanel** login
2. Left menu: **Websites** → **Node.js**
3. **Add website** (ya **Create** / **Deploy Node.js app**)
4. Choose: **Node.js Apps**
5. **Import Git Repository** → GitHub connect karo
6. Apna `alitworld` repo select karo
7. Branch: **main**

---

## Step 3 — Build settings (exact values)

| Setting | Value |
|---------|--------|
| **Node.js version** | `20` |
| **Install command** | `npm install` |
| **Build command** | `npm run build` |
| **Start command** | `npm run start -- -p $PORT` |
| **Framework** | Next.js (auto-detect) |
| **Output directory** | `.next` (default) |

Start command Hostinger ka official format hai — copy exactly.

---

## Step 4 — Environment variables

Deploy se pehle **Environment variables** section mein add karo:

| Name | Value |
|------|--------|
| `RESEND_API_KEY` | Resend.com se API key |
| `RESEND_FROM` | `Alitworld <hello@alitworld.com>` |
| `CONTACT_EMAIL` | `contact@alitworld.com` |
| `NODE_ENV` | `production` |

Bina `RESEND_API_KEY` ke contact form email nahi bhejega (site chalegi).

---

## Step 5 — Domain: alitworld.com

1. Deploy screen par **Domain** choose karo: **alitworld.com**
2. Agar pehle se website entry hai, Node.js app us domain se link karo
3. DNS already Hostinger par hai to automatic connect ho jata hai
4. SSL: Hostinger usually auto **HTTPS** deta hai

---

## Step 6 — Deploy

1. **Deploy** button dabao
2. 5–15 minute wait (build + install)
3. Success par link milega: `https://alitworld.com`

---

## Step 7 — Test

- Home page + 3D hero
- `/services`, `/contact`, `/about`
- Contact form submit (Resend key set ho)

---

## Update (naya code)

GitHub par push karo, phir Hostinger Node.js app mein:

**Redeploy** / **Deploy again** (panel mein button hota hai)

---

## Common errors

| Error | Fix |
|-------|-----|
| Build failed | Logs dekho — often missing env or Node version ≠ 20 |
| 502 / app not starting | Start command: `npm run start -- -p $PORT` |
| Domain not working | DNS → A record Hostinger IP; 24h wait |
| Contact email nahi | `RESEND_API_KEY` + domain verify on Resend |
| `home.skypc.in` error | Alag site hai — `alitworld.com` alag deploy |

---

## Quick checklist

- [ ] GitHub repo public ya Hostinger ko access
- [ ] `npm run build` local par success (optional test)
- [ ] Hostinger Node.js app created
- [ ] Build + Start commands sahi
- [ ] Env variables set
- [ ] Domain **alitworld.com** linked
- [ ] Deploy success
