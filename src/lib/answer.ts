// Normalizes answers so that the answer a format reports can be compared with the answer key.

function canonical(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(canonical);
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.keys(v as object).sort().map((k) => [k, canonical((v as Record<string, unknown>)[k])]));
  }
  return v;
}

export function normalize(format: string, value: unknown, props: Record<string, unknown> = {}): string {
  let v = value;
  if (format === 'input') {
    let s = String(v ?? '').trim().replace(/\s+/g, ' ');
    if (props.kind === 'number') s = s.replace(',', '.').replace(/^0+(?=\d)/, '');
    if (!props.caseSensitive) s = s.toLowerCase();
    v = s;
  }
  if ((format === 'choice' && props.multiple) || (format === 'graph-pick' && props.pick !== 'path')) {
    v = Array.isArray(v) ? [...v].map(String).sort() : v;
  }
  return JSON.stringify(canonical(v));
}

export function isCorrect(format: string, given: unknown, key: { answer?: unknown; answers?: unknown[] }, props: Record<string, unknown> = {}): boolean {
  const accepted = key.answers ?? (key.answer !== undefined ? [key.answer] : []);
  const g = normalize(format, given, props);
  return accepted.some((a) => normalize(format, a, props) === g);
}
