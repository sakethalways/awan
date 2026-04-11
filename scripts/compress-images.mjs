#!/usr/bin/env node
/**
 * One-shot image compression for public/ folder.
 *
 * Re-encodes every JPG/PNG/AVIF/WEBP in public/ to a web-sized, reasonably
 * compressed version — keeps the SAME filename so existing code doesn't
 * change. Saves 90%+ on file size with no visible quality loss at typical
 * screen sizes.
 *
 * Usage:
 *    node scripts/compress-images.mjs
 *
 * Tunables below if you want larger max size or higher quality.
 */

import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");

// ---- Tunables ----
const MAX_WIDTH = 1920;  // 1080p+ covers 99% of screens; plenty for hero images
const JPEG_QUALITY = 82; // visually near-lossless at typical sizes
const PNG_QUALITY = 82;  // sharp uses this as the effort/quality ceiling
const WEBP_QUALITY = 82;

const SUPPORTED = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
};

const compressOne = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (!SUPPORTED.has(ext)) return null;

  const originalBytes = (await fs.stat(filePath)).size;
  const tmpPath = `${filePath}.tmp`;

  let pipeline = sharp(filePath, { failOn: "none" }).resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
  });

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  } else if (ext === ".png") {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  } else if (ext === ".avif") {
    pipeline = pipeline.avif({ quality: WEBP_QUALITY });
  }

  await pipeline.toFile(tmpPath);
  const newBytes = (await fs.stat(tmpPath)).size;

  // Only replace if smaller — never bloat a file
  if (newBytes < originalBytes) {
    await fs.rename(tmpPath, filePath);
    return { filePath, originalBytes, newBytes, replaced: true };
  } else {
    await fs.unlink(tmpPath);
    return { filePath, originalBytes, newBytes, replaced: false };
  }
};

const main = async () => {
  console.log(`Compressing images in ${PUBLIC_DIR}\n`);
  const entries = await fs.readdir(PUBLIC_DIR, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile())
    .map((e) => path.join(PUBLIC_DIR, e.name))
    .filter((p) => SUPPORTED.has(path.extname(p).toLowerCase()));

  if (files.length === 0) {
    console.log("No images found.");
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    try {
      const result = await compressOne(file);
      if (!result) continue;
      totalBefore += result.originalBytes;
      totalAfter += result.replaced ? result.newBytes : result.originalBytes;
      const name = path.basename(file);
      const before = formatSize(result.originalBytes);
      const after = formatSize(result.replaced ? result.newBytes : result.originalBytes);
      const status = result.replaced
        ? `\x1b[32m✓\x1b[0m ${name.padEnd(55)} ${before.padStart(8)} → ${after.padStart(8)}`
        : `\x1b[90m•\x1b[0m ${name.padEnd(55)} already optimized (${before})`;
      console.log(status);
    } catch (err) {
      console.error(`\x1b[31m✗\x1b[0m ${path.basename(file)} — ${err.message}`);
    }
  }

  const saved = totalBefore - totalAfter;
  const pct = totalBefore > 0 ? Math.round((saved / totalBefore) * 100) : 0;
  console.log(
    `\n\x1b[1mTotal:\x1b[0m ${formatSize(totalBefore)} → ${formatSize(totalAfter)}  (\x1b[32msaved ${formatSize(saved)}, ${pct}%\x1b[0m)`
  );
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
