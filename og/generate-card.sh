#!/usr/bin/env bash
# Render the link preview card (og/card.html) to public/og-card.png, 1200×630,
# with headless Chrome. Set CHROME to override the browser path.
set -euo pipefail

cd "$(dirname "$0")"

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="$(cd .. && pwd)/public/og-card.png"
PROFILE="$(mktemp -d)"
PID=""
cleanup() {
  [ -n "$PID" ] && kill "$PID" 2>/dev/null || true
  rm -rf "$PROFILE"
}
trap cleanup EXIT

if [ ! -x "$CHROME" ]; then
  echo "Error: Chrome not found at $CHROME (set CHROME=/path/to/chrome)." >&2
  exit 1
fi

rm -f "$OUT"
# Headless Chrome on macOS can keep running after it writes the screenshot,
# so run it in the background and stop it once the file is there.
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --user-data-dir="$PROFILE" \
  --window-size=1200,630 --force-device-scale-factor=1 \
  --virtual-time-budget=3000 \
  --screenshot="$OUT" "file://$(pwd)/card.html" >/dev/null 2>&1 &
PID=$!

for _ in $(seq 1 60); do
  if [ -s "$OUT" ]; then
    sleep 1 # let the write finish
    echo "Built $OUT"
    exit 0
  fi
  sleep 0.5
done

echo "Error: Chrome did not write $OUT within 30 s." >&2
exit 1
