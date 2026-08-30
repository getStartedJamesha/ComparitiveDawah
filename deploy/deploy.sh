#!/usr/bin/env bash
# Pull latest, rebuild, and (re)start the systemd service if it's installed.
# Usage: ./deploy/deploy.sh
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_DIR"

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
echo "==> Pulling latest changes on $BRANCH"
git pull --ff-only origin "$BRANCH"

echo "==> Installing dependencies"
npm ci

echo "==> Building production bundle"
npm run build

if systemctl list-unit-files 2>/dev/null | grep -q '^comparativedawah\.service'; then
  echo "==> Restarting comparativedawah service"
  sudo systemctl restart comparativedawah
  systemctl status comparativedawah --no-pager -l | head -n 10
else
  echo "==> systemd service not installed yet."
  echo "    See DEPLOYMENT.md to install deploy/comparativedawah.service once,"
  echo "    or run 'node deploy/serve.mjs' directly to test now."
fi
