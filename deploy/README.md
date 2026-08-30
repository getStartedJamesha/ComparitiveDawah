# Deploying Comparative Dawah to a Raspberry Pi

Tested target: Raspberry Pi 5, Ubuntu Server (64-bit). Should also work on
a Pi 4 or Pi 3B+ — this is a static site (no database, no server-side
rendering at runtime), so it's lighter than the bill tracker.

## Quick path

SSH into the Pi, then:

```bash
git clone https://github.com/getStartedJamesha/ComparitiveDawah.git
cd ComparitiveDawah
git checkout claude/dawah-comparative-religion-app-dngakm   # or main, once merged
bash deploy/setup.sh
```

This installs Node.js if needed, installs dependencies, builds the
production bundle, and installs + starts it as a systemd service
(`comparativedawah`) that survives reboots. At the end it prints the URL
to open from another device on your home network, e.g.
`http://192.168.1.42:4173`.

To update later after pulling new code: just re-run `bash deploy/setup.sh`
from inside the `ComparitiveDawah` directory — it's safe to re-run.

## What the script does, step by step

If you'd rather run it by hand (or something goes wrong and you want to see
where):

```bash
# 1. Node.js 20+ (Ubuntu's apt version is often too old for Vite 8 / React 19)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Get the code
git clone https://github.com/getStartedJamesha/ComparitiveDawah.git
cd ComparitiveDawah
git checkout claude/dawah-comparative-religion-app-dngakm

# 3. Install and build
npm install
npm run build          # produces dist/

# 4. Run it directly (foreground, for testing)
npm start               # runs deploy/serve.mjs against dist/
# Open http://<pi-ip-address>:4173 from another device on the LAN
```

Once you've confirmed it works with `npm start`, stop it (Ctrl-C) and use
`deploy/setup.sh` to install it as a proper background service instead of
leaving a terminal open.

## Storage: nothing to back up

Unlike the bill tracker, this app has no database and no user-uploaded
files — `npm run build` produces a static `dist/` folder from the code in
this repo, and `deploy/serve.mjs` only ever reads it. There's no local
state on the Pi worth backing up; the source of truth is the git repo
itself. Updating is just `bash deploy/setup.sh` again.

## Accessing it away from home

For use only on your home Wi-Fi, nothing further is needed — just open
`http://<pi-ip>:4173` from your phone or laptop while on the same network.

This app's risk profile is different from the bill tracker: there's no
login, but there's also no personal data, no database, and no write
actions — every visitor sees the same public, read-only content. That
makes it reasonable (unlike the bill tracker) to expose it further if you
want to, but you'll need to actually secure the path there yourself:

- **Simplest, safest by default:** install [Tailscale](https://tailscale.com/)
  on the Pi and your other devices, same as for the bill tracker. Free for
  personal use, encrypts everything, no ports opened on your router.
- **If you want it reachable by anyone, with a domain:** put a reverse
  proxy (nginx, Caddy, or similar) in front of `127.0.0.1:4173` with a TLS
  certificate, then port-forward 443 to that proxy — not directly to 4173.

## Managing the service

```bash
sudo systemctl status comparativedawah     # is it running?
sudo systemctl restart comparativedawah    # restart
sudo journalctl -u comparativedawah -f     # live logs
```

## Troubleshooting

- **`npm run build` fails with a TypeScript error**: run `npm run build`
  locally first (or `npm run lint`) before deploying — the Pi build should
  never be the first place you see a type error.
- **Port 4173 already in use**: change `Environment=PORT=4173` in
  `/etc/systemd/system/comparativedawah.service`, or stop whatever else is
  using it, then `sudo systemctl daemon-reload && sudo systemctl restart comparativedawah`.
- **A route 404s on direct load or refresh** (e.g. visiting
  `/concepts/oneness` directly instead of clicking to it): `deploy/serve.mjs`
  is supposed to fall back to `index.html` for any unmatched path so
  client-side routing can take over — if this happens, the service probably
  isn't running the current build. Restart it: `sudo systemctl restart comparativedawah`.
- **`npm run build` is slow**: normal on a Pi, especially the first time
  (a couple of minutes, similar to the bill tracker's `next build`).
  Subsequent builds after small changes are faster.
