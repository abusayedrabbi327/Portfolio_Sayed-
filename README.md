# 🌐 Ultra-Fast Developer & Researcher Portfolio: Abu Sayed Rabbi

> High-performance, 100% portable developer & researcher portfolio engineered with **Astro SSG**, **React interactive islands**, **Tailwind CSS v4**, and **TypeScript**. Designed for **100/100 Lighthouse performance** and **zero vendor lock-in**.

---

## 🏛️ System Architecture

```
                          ┌──────────────────────────┐
                          │   Single Source of Truth │
                          │  (src/data/cvData.ts/json│
                          └─────────────┬────────────┘
                                        │
                         ┌──────────────┴──────────────┐
                         │   Astro 5 SSG + React 19    │
                         │  + Tailwind CSS v4 + Lucide │
                         └──────────────┬──────────────┘
                                        │ (Static Build / Docker)
           ┌────────────────────────────┼────────────────────────────┐
           ▼                            ▼                            ▼
   [ Serverless / Edge ]        [ Git-Native Static ]        [ Self-Hosted / VPS ]
 Cloudflare Pages / Vercel   GitHub Pages / Netlify / S3    Docker (Nginx Alpine) / Coolify
```

---

## ⚡ Key Highlights

- 🎯 **100% Portable SSG**: Pure HTML, CSS, and JS compiled into `dist/` with zero server runtime dependencies.
- 🔬 **Research Showcase**: Dedicated spotlight for **AEGIS (Capstone Research)**, **RT-XNIDS**, **SIFT**, and **EcoCode-LLM** with visual pipeline architectures and benchmark metrics.
- 💻 **Flagship Projects Matrix**: Interactive filterable project grid (**PocketGuru**, **Thikana**, **Fender v3.5**, **NSN**) with architecture breakdown modals.
- 🛠️ **Tech Matrix**: Categorized skill ecosystem (AI/ML, Cybersecurity, Web, Systems, DevOps, Desktop).
- 🏛️ **Leadership Hub**: Highlights executive roles at UIU English Language Forum, UIU Theater & Film Club, UIU Robotics Club, and Scaler Academy.
- 🌓 **Theme Management**: Dark/Light mode with instant zero-flash client-side persistence.
- 📄 **Master CV Sync**: Downloadable CV synchronized with the TypeScript single source of truth.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build pure static production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🌍 Universal Deployment Guide (Host Anywhere)

### 1. GitHub Pages (Automated CI/CD)
The repository includes `.github/workflows/deploy.yml`. When you push to `main`:
1. Go to your GitHub repository -> **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
3. Push to `main`, and your site will be live instantly at `https://<username>.github.io/<repo-name>/`.

### 2. Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Compute (Workers & Pages)**.
2. Select **Create application** -> **Pages** -> **Connect to Git**.
3. Build Settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Deploy!

### 3. Vercel / Netlify
- **Vercel**: Import repository -> Framework preset will automatically detect Astro -> Click **Deploy**.
- **Netlify**: Connect repository -> Build command `npm run build`, Publish directory `dist`.

### 4. Docker Container (Any VPS, DigitalOcean, Hetzner, Coolify)
A minimal multi-stage `Dockerfile` using Nginx Alpine (`< 25MB`) is included:

```bash
# Build the Docker image
docker build -t abu-sayed-portfolio .

# Run container on port 80
docker run -d -p 80:80 --name portfolio-server abu-sayed-portfolio
```

### 5. AWS S3 + CloudFront
```bash
# Build static site
npm run build

# Sync dist/ directly to your S3 bucket
aws s3 sync ./dist s3://your-portfolio-bucket --delete
```

---

## 📝 Updating Profile & CV Data (Single Source of Truth)

All site contents are driven by:
- `src/data/cvData.ts` (TypeScript schema)
- `src/data/cvData.json` (Raw JSON export)

To add new research papers, projects, skills, or leadership positions, simply edit `src/data/cvData.ts`. The UI components will automatically reflect your changes on the next build.

---

## 📄 License
© 2026 Abu Sayed Rabbi. Proprietary research and open-source project portfolio.
