#!/usr/bin/env bash
# Copy assets for Next.js standalone output (run after npm run build)
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STANDALONE="$ROOT/.next/standalone"

if [ ! -d "$STANDALONE" ]; then
  echo "Error: .next/standalone not found. Run npm run build first."
  exit 1
fi

cp -r "$ROOT/public" "$STANDALONE/public"
mkdir -p "$STANDALONE/.next"
cp -r "$ROOT/.next/static" "$STANDALONE/.next/static"

echo "Standalone bundle ready in .next/standalone"
