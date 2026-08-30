# Deploying on a Raspberry Pi

This is a static site (React + Vite, no backend, no database), so deployment
is just: clone → build → serve the `dist/` folder. No Docker, no database
setup required.

## 1. One-time setup on the Pi

**Install Node.js 20+** if you don't already have it (needed for the other
project too, so you may already be set):

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git
node -v   # confirm v20 or newer
```

**Clone the repo:**

```bash
cd ~
git clone https://github.com/getStartedJamesha/ComparitiveDawah.git
cd ComparitiveDawah
git checkout claude/dawah-comparative-religion-app-dngakm   # or main, once merged
```

**First build + start:**

```bash
chmod +x deploy/deploy.sh
npm ci
npm run build
```

**Install the systemd service** so it starts on boot and restarts if it
crashes. `deploy/comparativedawah.service` assumes the repo lives at
`/home/pi/ComparitiveDawah` and runs as user `pi` — edit those paths first
if your Pi's username or clone location differs:

```bash
sudo cp deploy/comparativedawah.service /etc/systemd/system/comparativedawah.service
sudo systemctl daemon-reload
sudo systemctl enable --now comparativedawah
sudo systemctl status comparativedawah
```

The app is now running at `http://<pi-ip>:4173`.

## 2. Deploying updates

Every time there's a new commit to pull in:

```bash
cd ~/ComparitiveDawah
./deploy/deploy.sh
```

This pulls the current branch, runs `npm ci`, rebuilds (`npm run build`),
and restarts the `comparativedawah` service. Same one-command flow you'd
run for the bill tracker.

## 3. Access

- **Local network, no domain (default):** `http://<pi-ip>:4173` — find the
  Pi's IP with `hostname -I`.
- **Behind a domain / TLS / alongside other apps later:** put nginx (or
  whatever you already run in front of the bill tracker) in front of it as
  a reverse proxy to `127.0.0.1:4173`. A ready-to-edit template is at
  `deploy/nginx.conf.example`.

## What's actually running

`deploy/serve.mjs` is a ~60-line, dependency-free Node static file server
(uses only `node:http`/`node:fs`) that serves `dist/` with SPA fallback to
`index.html`, so client-side routes like `/concepts/oneness` work on a
direct visit or page refresh, not just via in-app navigation. No `serve`,
`nginx`, or Docker required to get running — those are optional upgrades
once you want a domain or to consolidate with other Pi services.
