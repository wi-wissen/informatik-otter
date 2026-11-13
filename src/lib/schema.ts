// Shared zod schemas for task content. Used by src/content.config.ts.
import { z } from 'astro/zod';
import taxonomy from '../data/taxonomy.json';

const keys = <T extends Record<string, unknown>>(o: T) => Object.keys(o) as [string, ...string[]];

export const gradeKey = z.enum(keys(taxonomy.grades));
export const difficulty = z.enum(keys(taxonomy.difficulty));
export const giContent = z.enum(keys(taxonomy.giContent));
export const giProcess = z.enum(keys(taxonomy.giProcess));
export const topic = z.enum(keys(taxonomy.topics));
export const method = z.enum(keys(taxonomy.methods));

/** Base58 without 0 O I l, case-sensitive, exactly 4 characters. */
export const SHORT_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
export const shortCode = z.string().regex(/^[1-9A-HJ-NP-Za-km-z]{4}$/, 'short must be 4 Base58 characters');

/** An item shown in an interaction. `image` is a path relative to the task folder, e.g. ./img/a.png */
const item = z.object({
  id: z.string(),
  label: z.string().optional(),
  image: z.string().optional(),
  alt: z.string().optional(),
});

export const interaction = z.discriminatedUnion('format', [
  z.object({
    format: z.literal('choice'),
    props: z.object({
      options: z.array(item).min(2),
      multiple: z.boolean().default(false),
      columns: z.number().int().min(1).max(10).optional(),
      /** Show A, B, C … badges (off when the pictures already carry their letters). */
      keys: z.boolean().default(true),
    }),
  }),
  z.object({
    format: z.literal('sort-list'),
    props: z.object({
      items: z.array(item).min(2),
      direction: z.enum(['horizontal', 'vertical']).default('horizontal'),
      startLabel: z.string().optional(),
      endLabel: z.string().optional(),
    }),
  }),
  z.object({
    format: z.literal('match'),
    props: z.object({
      left: z.array(item).min(1),
      right: z.array(item).min(1),
    }),
  }),
  z.object({
    format: z.literal('graph-pick'),
    props: z.object({
      width: z.number().default(400),
      height: z.number().default(300),
      background: z.string().optional(),
      nodeImage: z.string().optional(),
      nodeRadius: z.number().default(16),
      /** Do not draw nodes (e.g. when the background image already shows them). */
      hideNodes: z.boolean().default(false),
      /** At most this many picks; with 1 a new click replaces the previous pick. */
      max: z.number().int().min(1).optional(),
      directed: z.boolean().default(false),
      pick: z.enum(['nodes', 'edges', 'path']),
      nodes: z.array(z.object({ id: z.string(), x: z.number(), y: z.number(), label: z.string().optional(), image: z.string().optional() })),
      edges: z.array(z.object({ id: z.string().optional(), from: z.string(), to: z.string(), label: z.string().optional() })).default([]),
    }),
  }),
  z.object({
    format: z.literal('pixel-grid'),
    props: z.object({
      rows: z.number().int().min(1),
      cols: z.number().int().min(1),
      palette: z.array(z.string()).min(2),
      initial: z.array(z.array(z.number().int())).optional(),
      locked: z.array(z.array(z.boolean())).optional(),
    }),
  }),
  z.object({
    format: z.literal('command-sequence'),
    props: z.object({
      commands: z.array(item).min(1),
      maxLength: z.number().int().min(1).default(12),
    }),
  }),
  z.object({
    format: z.literal('input'),
    props: z.object({
      kind: z.enum(['number', 'text']).default('text'),
      placeholder: z.string().optional(),
      prefix: z.string().optional(),
      suffix: z.string().optional(),
      caseSensitive: z.boolean().default(false),
    }),
  }),
  z.object({
    format: z.literal('place'),
    props: z.object({
      items: z.array(item).min(1),
      zones: z.array(z.object({ id: z.string(), label: z.string().optional(), x: z.number().optional(), y: z.number().optional(), w: z.number().optional(), h: z.number().optional(), capacity: z.number().int().min(1).optional(), accepts: z.array(z.string()).optional() })).min(1),
      background: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
      reusable: z.boolean().default(false),
      trayLabel: z.string().optional(),
      itemSize: z.number().optional(),
      initial: z.record(z.string(), z.union([z.string(), z.array(z.string())])).optional(),
    }),
  }),
  z.object({
    format: z.literal('hotspots'),
    props: z.object({
      background: z.string(),
      width: z.number(),
      height: z.number(),
      spots: z.array(z.object({ id: z.string(), x: z.number(), y: z.number(), w: z.number().optional(), h: z.number().optional(), label: z.string().optional() })).min(1),
      states: z.array(z.object({ id: z.string(), label: z.string().optional(), image: z.string().optional() })).min(2),
      spotSize: z.number().optional(),
    }),
  }),
  z.object({
    format: z.literal('custom'),
    props: z.record(z.string(), z.unknown()).default({}),
  }),
]);

export const source = z.object({
  type: z.enum(['original', 'synthetic']),
  work: z.string(),
  year: z.number().int().optional(),
  page: z.number().int().optional(),
  url: z.string().url().optional(),
  bebras_id: z.string().optional(),
  country: z.string().length(2).optional(),
  license: z.string(),
  derived_from: z.array(z.string()).optional(),
  generator: z.string().optional(),
  reviewed: z.boolean().optional(),
});

export const task = z.object({
  short: shortCode,
  title: z.string(),
  summary: z.string().max(160),
  grades: z.partialRecord(gradeKey, difficulty).refine((g) => Object.keys(g).length > 0, 'at least one grade'),
  gi: z.object({ content: z.array(giContent).min(1), process: z.array(giProcess).default([]) }),
  topics: z.array(topic).min(1),
  methods: z.array(method).default([]),
  mascot: z.enum(['beaver', 'otter']).default('beaver'),
  interaction: interaction,
  source: source,
});

export const solution = z.object({
  /** The correct answer, in the shape the format reports (see docs/formats.md). */
  answer: z.unknown().optional(),
  /** Alternative: several accepted answers. */
  answers: z.array(z.unknown()).optional(),
});

export type Task = z.infer<typeof task>;
export type Interaction = z.infer<typeof interaction>;
