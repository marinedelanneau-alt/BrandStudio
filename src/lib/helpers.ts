export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function groupBy<T, K extends string>(items: T[], getKey: (item: T) => K) {
  return items.reduce<Record<K, T[]>>((acc, item) => {
    const key = getKey(item);
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

export function cleanText(value: string) {
  return value
    .replace(/â€™/g, "'")
    .replace(/â€œ|â€/g, '"')
    .replace(/â€“|â€”/g, "-")
    .replace(/â€¦/g, "...")
    .replace(/Ã©/g, "é")
    .replace(/Ã¨/g, "è")
    .replace(/Ã /g, "à")
    .replace(/Ãª/g, "ê")
    .replace(/Ã¢/g, "â")
    .replace(/Ã§/g, "ç")
    .replace(/Ã¹/g, "ù")
    .replace(/Ã»/g, "û")
    .replace(/Ã®/g, "î")
    .replace(/Ã´/g, "ô")
    .replace(/Å“/g, "oe")
    .replace(/Â/g, "");
}
