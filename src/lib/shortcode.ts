// Short codes: 4 characters, Base58 (no 0 O I l), case-sensitive.
export const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
/** Characters that do not exist in codes but are easy to type by mistake. */
export const LOOKALIKE: Record<string, string> = { '0': 'o', O: 'o', I: '1', l: '1' };

export type Codes = Record<string, { id: string; title: string }>;

export type Analysis = {
  raw: string;
  chars: { c: string; n: string | null; kind: 'ok' | 'fixed' | 'bad' }[];
  normalized: string;
};

export function analyse(raw: string): Analysis {
  const chars = [...raw].map((c) => {
    if (LOOKALIKE[c]) return { c, n: LOOKALIKE[c], kind: 'fixed' as const };
    if (ALPHABET.includes(c)) return { c, n: c, kind: 'ok' as const };
    return { c, n: null, kind: 'bad' as const };
  });
  return { raw, chars, normalized: chars.map((x) => x.n ?? '').join('') };
}

/** Codes that are one small slip away: wrong case, one wrong/missing/extra character. */
export function suggest(codes: Codes, input: string): string[] {
  const keys = Object.keys(codes);
  const ci = keys.filter((k) => k !== input && k.toLowerCase() === input.toLowerCase());
  if (ci.length) return ci;
  const out = keys.filter((k) => {
    if (k.length === input.length) return [...k].filter((c, i) => c !== input[i]).length === 1;
    if (k.length === input.length + 1) return [...k].some((_, i) => k.slice(0, i) + k.slice(i + 1) === input);
    if (k.length === input.length - 1) return [...input].some((_, i) => input.slice(0, i) + input.slice(i + 1) === k);
    return false;
  });
  return out.slice(0, 5);
}
