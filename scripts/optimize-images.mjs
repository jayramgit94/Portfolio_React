import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("src/assets");

async function walk(dir, files = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, files);
    } else if (/\.png$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimize() {
  const pngFiles = await walk(root);
  let converted = 0;

  for (const file of pngFiles) {
    const outFile = file.replace(/\.png$/i, ".webp");

    const image = sharp(file);
    const metadata = await image.metadata();
    const width = metadata.width ?? 0;

    let pipeline = image;
    if (width > 1600) {
      pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
    }

    await pipeline.webp({ quality: 74, effort: 5 }).toFile(outFile);
    converted += 1;
  }

  console.log(`Converted ${converted} PNG files to WebP.`);
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});
