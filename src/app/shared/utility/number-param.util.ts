export function parseNonNegativeNumber(
  value: string | null,
  fallback: number
): number {
  if (value === null) return fallback;

  const num = Number(value);

  if (Number.isNaN(num)) return fallback;

  return num >= 0 ? num : fallback;
}