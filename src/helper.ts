import sharp from "sharp";

export async function resizeImg(img: Buffer) {
  const metadata = await sharp(img).metadata();
  const width = metadata.width!;
  const height = metadata.height!;

  const resized = await sharp(img)
    .resize(Math.round(width / 2), Math.round(height / 2))
    .jpeg({ quality: 75 })
    .toBuffer();

  return resized;
}
