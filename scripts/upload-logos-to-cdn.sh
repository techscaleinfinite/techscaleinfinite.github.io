#!/bin/bash
# Upload all app logos to cdn.scaleinfinite.fr (Cloudflare R2)
# Prerequisites: npm install -g wrangler && wrangler login
# Or set CLOUDFLARE_API_TOKEN environment variable

set -e

LOGO_DIR="$(dirname "$0")/../static/images/app-logos"
BUCKET="cdn"  # R2 bucket name — adjust if different
CDN_PREFIX="https://cdn.scaleinfinite.fr/app-logos"

if ! command -v wrangler &> /dev/null; then
  echo "Error: wrangler CLI not found. Install with: npm install -g wrangler"
  exit 1
fi

echo "Uploading $(ls "$LOGO_DIR"/*.png 2>/dev/null | wc -l) logos to R2..."

for file in "$LOGO_DIR"/*.png; do
  name=$(basename "$file")
  echo "  Uploading $name..."
  wrangler r2 object put "$BUCKET/app-logos/$name" --file="$file" --content-type="image/png"
done

echo ""
echo "Upload complete. Now updating database paths to CDN URLs..."

node -e "
const initSqlJs = require('sql.js/dist/sql-wasm.js');
const fs = require('fs');
const path = require('path');

(async () => {
  const SQL = await initSqlJs();
  const dbPath = path.join('$(dirname "$0")', '..', 'static', 'apps.sqlite');
  const jsonPath = path.join('$(dirname "$0")', '..', 'static', 'appCategories.json');

  // Update SQLite
  const buf = fs.readFileSync(dbPath);
  const db = new SQL.Database(new Uint8Array(buf));
  db.run(\"UPDATE apps SET image = REPLACE(image, '/images/app-logos/', '$CDN_PREFIX/')\");
  const count = db.exec('SELECT changes()');
  console.log('Updated ' + count[0].values[0][0] + ' SQLite app images to CDN URLs');
  fs.writeFileSync(dbPath, Buffer.from(db.export()));
  db.close();

  // Update JSON
  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  let jsonCount = 0;
  json.forEach(cat => {
    cat.images.forEach(app => {
      if (app.logo && app.logo.startsWith('/images/app-logos/')) {
        app.logo = app.logo.replace('/images/app-logos/', '$CDN_PREFIX/');
        jsonCount++;
      }
    });
  });
  fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));
  console.log('Updated ' + jsonCount + ' JSON app logos to CDN URLs');
  console.log('Done! Rebuild the site with: npm run build');
})();
"
