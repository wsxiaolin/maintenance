import { execFileSync, spawn } from 'node:child_process';
import { chromium } from '@playwright/test';

const providedBaseUrl = process.env.SCREENSHOT_BASE_URL;
const baseUrl = providedBaseUrl ?? 'http://127.0.0.1:5173';
const pages = [
  ['home', '/'],
  ['history-1f', '/history/1f/'],
  ['project', '/project/'],
];

function contentType(path) {
  if (path.endsWith('.svg')) return 'image/svg+xml';
  if (path.endsWith('.webp')) return 'image/webp';
  if (path.endsWith('.png')) return 'image/png';
  if (path.endsWith('.jpg') || path.endsWith('.jpeg')) return 'image/jpeg';
  return 'application/octet-stream';
}

function fetchRemote(url) {
  return execFileSync('curl', ['-L', '--silent', '--show-error', '--max-time', '30', '-A', 'Mozilla/5.0', url], {
    maxBuffer: 60 * 1024 * 1024,
  });
}

async function waitForServer(url, timeoutMs = 20_000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  }

  throw new Error(`Timed out waiting for ${url}`);
}

let server;
if (!providedBaseUrl) {
  server = spawn('npx', ['vite', '--host', '127.0.0.1'], { stdio: 'inherit' });
  await waitForServer(baseUrl);
}

try {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });

  await context.route('**/asset-proxy/**', async route => {
    const path = new URL(route.request().url()).pathname.replace('/asset-proxy', '');
    const body = fetchRemote(`https://en.dinotaeng.com${path}`);
    await route.fulfill({ body, contentType: contentType(path) });
  });

  await context.route('**/cafe24-proxy/**', async route => {
    const path = new URL(route.request().url()).pathname.replace('/cafe24-proxy', '');
    const body = fetchRemote(`https://cafe24img.poxo.com${path}`);
    await route.fulfill({ body, contentType: contentType(path) });
  });

  const page = await context.newPage();

  for (const [name, path] of pages) {
    await page.goto(`${baseUrl}${path}`, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
    console.log(`captured screenshots/${name}.png`);
  }

  await browser.close();
} finally {
  server?.kill('SIGTERM');
}
