// Prints N unused short codes: node scripts/new-short.mjs [count]
// Codes are 4 Base58 characters and also unique ignoring case.
import { randomInt } from 'node:crypto';
import { ALPHABET, shortCodes } from './lib.mjs';

const n = Number(process.argv[2] ?? 1);
const taken = new Set([...shortCodes().keys()].map((c) => c.toLowerCase()));
const out = [];
while (out.length < n) {
  const code = Array.from({ length: 4 }, () => ALPHABET[randomInt(ALPHABET.length)]).join('');
  if (taken.has(code.toLowerCase())) continue;
  // at least one letter and one digit keeps codes readable and distinct from words
  if (!/[0-9]/.test(code) || !/[A-Za-z]/.test(code)) continue;
  taken.add(code.toLowerCase());
  out.push(code);
}
console.log(out.join('\n'));
