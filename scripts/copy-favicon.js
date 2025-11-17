import fs from "fs";
import path from "path";

const root = path.resolve(".");
const src = path.join(root, "resources", "images", "Favicon.png");
const destDir = path.join(root, "static");
const dest = path.join(destDir, "favicon.ico");

async function copy() {
  try {
    await fs.promises.mkdir(destDir, { recursive: true });
    await fs.promises.copyFile(src, dest);
    console.log(`Copied favicon from ${src} to ${dest}`);
  } catch (err) {
    console.error("Failed to copy favicon:", err);
    process.exit(1);
  }
}

copy();
