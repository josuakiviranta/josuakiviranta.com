#!/usr/bin/env bash
# Render the AI Code of Conduct (coc/code-of-conduct.html) to
# public/ai-code-of-conduct.pdf, A4, with headless Chrome. Set CHROME to
# override the browser path.
set -euo pipefail

cd "$(dirname "$0")"

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="$(cd .. && pwd)/public/ai-code-of-conduct.pdf"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

if [ ! -x "$CHROME" ]; then
  echo "Error: Chrome not found at $CHROME (set CHROME=/path/to/chrome)." >&2
  exit 1
fi

rm -f "$OUT"
"$CHROME" --headless=new --disable-gpu \
  --user-data-dir="$PROFILE" \
  --no-pdf-header-footer --virtual-time-budget=3000 \
  --print-to-pdf="$OUT" "file://$(pwd)/code-of-conduct.html" >/dev/null 2>&1

[ -s "$OUT" ] && echo "Built $OUT"
