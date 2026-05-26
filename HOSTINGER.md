# Alitworld — Hostinger par live deploy

Yeh site **Next.js** hai (3D hero + contact API). Normal PHP hosting par **nahi** chalegi.

## Aapko kya chahiye

| Hostinger plan | Kaam karega? |
|----------------|--------------|
| **VPS** | ✅ Best (recommended) |
| **Cloud / Business** (Node.js Web App option) | ✅ Theek |
| Sirf **Shared** (PHP only) | ❌ Nahi |

---

## Option A — Hostinger VPS (recommended)

### 1. VPS par SSH connect

Hostinger hPanel → VPS → SSH details.

```bash
ssh root@YOUR_SERVER_IP
```

### 2. Node.js 20 install

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt update && sudo apt install -y nodejs git nginx
node -v   # v20.x
```

### 3. Code upload (GitHub se)

PC par pehle GitHub par code push karo (`.env.local` mat push karo).

```bash
cd /var/www
sudo git clone https://github.com/YOUR_USERNAME/alitworld.git
cd alitworld
```

### 4. Environment variables

```bash
nano .env.local
```

Paste (apni values):

```env
RESEND_API_KEY=re_xxxxxxxx
RESEND_FROM=Alitworld <hello@yourdomain.com>
CONTACT_EMAIL=contact@alitworld.com
```

Save: `Ctrl+O`, Enter, `Ctrl+X`

### 5. Build & start

```bash
npm install
npm run build
bash scripts/postbuild-standalone.sh
sudo npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

Site ab server par port **3000** par chal rahi hai.

### 6. Domain + SSL (Nginx)

```bash
sudo nano /etc/nginx/sites-available/alitworld
```

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/alitworld /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Hostinger hPanel se domain ka **A record** VPS IP par point karo.

SSL (free):

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Option B — Hostinger Node.js Web App

Agar aapke plan mein **Websites → Add Website → Node.js Web App** dikhe:

1. GitHub repo connect karo  
2. **Node version:** 20  
3. **Build command:** `npm install && npm run build`  
4. **Start command:** `npm start`  
5. **Port:** panel jo de (often 3000) — env mein `PORT=3000`  
6. Environment variables panel mein add karo (`RESEND_API_KEY`, etc.)

Note: Standalone build ke liye panel agar custom start allow kare to:

`node .next/standalone/server.js`

---

## Option C — ZIP upload (FTP + SSH)

1. PC par zip banao — **bina** `node_modules` aur `.next`  
2. VPS par `/var/www/alitworld` upload (FileZilla)  
3. SSH se steps 4–6 repeat karo  

---

## Update (naya code deploy)

```bash
cd /var/www/alitworld
git pull
npm install
npm run build
bash scripts/postbuild-standalone.sh
pm2 restart alitworld
```

---

## Checklist

- [ ] Domain Hostinger se liya / connected  
- [ ] VPS ya Node.js hosting  
- [ ] `.env.local` server par set  
- [ ] `npm run build` success  
- [ ] PM2 / Node app running  
- [ ] Nginx reverse proxy + SSL  
- [ ] https://yourdomain.com open hota hai  

---

## Problems?

| Problem | Fix |
|---------|-----|
| 500 error | `pm2 logs alitworld` dekho |
| Contact form email nahi | `RESEND_API_KEY` check karo |
| 3D slow on mobile | Normal — VPS par theek chalega |
| Build fail | SSH par `npm run build` error copy karo |

---

## Important

- `.env.local` kabhi GitHub par **mat** daalo  
- `public/logo.png` aur images repo mein honi chahiye  
- Pehli baar deploy ke baad **hard refresh** karo phone par  
