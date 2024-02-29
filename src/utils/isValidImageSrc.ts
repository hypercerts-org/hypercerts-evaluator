export function isValidImageSrc(src: string | undefined | null): boolean {
  if (!src) return false;
  return src.startsWith("https") || src.startsWith("data:image/");
}
