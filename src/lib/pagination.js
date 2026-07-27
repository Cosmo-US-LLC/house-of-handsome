// Builds a compact page list: first 3 pages, an ellipsis, the current page
// (if it isn't already shown), another ellipsis, and the last page — instead
// of rendering every page number for large listings.
export function getPageItems(current, last) {
  if (last <= 4) {
    return Array.from({ length: last }, (_, i) => i + 1);
  }

  const pages = new Set([1, 2, 3, last]);
  if (current > 3 && current < last) pages.add(current);

  const sorted = [...pages].sort((a, b) => a - b);
  const items = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) items.push("ellipsis");
    items.push(p);
    prev = p;
  }
  return items;
}
