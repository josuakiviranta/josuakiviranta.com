#!/usr/bin/env bash
# Build the CV PDFs from their .tex sources.
# Prefers tectonic; falls back to pdflatex if available.
set -euo pipefail

cd "$(dirname "$0")"

SOURCES=("cv-josua-kiviranta.tex" "cv-josua-kiviranta-it.tex")

build() {
  local src="$1"
  if command -v tectonic >/dev/null 2>&1; then
    tectonic --keep-logs --synctex "$src"
  elif command -v pdflatex >/dev/null 2>&1; then
    # Run twice so hyperref/references settle.
    pdflatex -interaction=nonstopmode -halt-on-error "$src"
    pdflatex -interaction=nonstopmode -halt-on-error "$src"
  else
    echo "Error: no LaTeX engine found (need 'tectonic' or 'pdflatex')." >&2
    echo "Install with: brew install tectonic" >&2
    exit 1
  fi
  echo "Built $(pwd)/${src%.tex}.pdf"
}

for src in "${SOURCES[@]}"; do
  build "$src"
done
