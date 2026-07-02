// Runs automatically on every Vercel deploy (set via vercel.json buildCommand).
// Ensures the Hypothesis embed script is present in every .html file,
// even if that file was freshly regenerated and doesn't include it.

const fs = require('fs');
const path = require('path');

const SNIPPET = '<script src="https://hypothes.is/embed.js" async></script>';
const ROOT_DIR = __dirname;

function injectIntoFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('hypothes.is/embed.js')) {
    console.log(`Skip (already present): ${path.relative(ROOT_DIR, filePath)}`);
    return;
  }
  if (!html.includes('</body>')) {
    console.log(`Skip (no </body> tag found): ${path.relative(ROOT_DIR, filePath)}`);
    return;
  }
  html = html.replace('</body>', `  ${SNIPPET}\n</body>`);
  fs.writeFileSync(filePath, html);
  console.log(`Injected Hypothesis into: ${path.relative(ROOT_DIR, filePath)}`);
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      injectIntoFile(fullPath);
    }
  }
}

walk(ROOT_DIR);
