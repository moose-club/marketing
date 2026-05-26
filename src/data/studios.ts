// Port of FN_STUDIOS from 02-shared-ui.jsx. The "known studios" set
// — phantom partners (Method Pilates, etc) live inline on PARTNERS.

export type Studio = {
  name: string;
  short: string;
  mod: string;
  /** Studio-to-credit price ratio. Home studio = 1.0. */
  spr: number;
  p1: string;
  p2: string;
  initial: string;
};

export const STUDIOS: Record<string, Studio> = {
  ironworks: { name: 'Ironworks Boxing',  short: 'Ironworks',  mod: 'Boxing',           spr: 1.5,  p1: '#2a1810', p2: '#7a2a1a', initial: 'I' },
  flowyoga:  { name: 'Flow & Co. Yoga',   short: 'Flow & Co.', mod: 'Hot Yoga',         spr: 1.0,  p1: '#1f3d2b', p2: '#6e9c5d', initial: 'F' },
  pulse:     { name: 'Pulse Reformer',    short: 'Pulse',      mod: 'Reformer Pilates', spr: 1.0,  p1: '#4a1f3d', p2: '#a35da6', initial: 'P' },
  spincity:  { name: 'Spin City',         short: 'Spin City',  mod: 'Cycle',            spr: 0.75, p1: '#0e1b2c', p2: '#3d6cab', initial: 'S' },
  forge:     { name: 'The Forge HIIT',    short: 'The Forge',  mod: 'HIIT',             spr: 1.5,  p1: '#1a1a1a', p2: '#5a5a5a', initial: 'F' },
  barre9:    { name: 'Barre Nine',        short: 'Barre Nine', mod: 'Barre',            spr: 1.0,  p1: '#3d2a4a', p2: '#a07ab5', initial: 'B' },
  rowhouse:  { name: 'Rowhouse Athletic', short: 'Rowhouse',   mod: 'Rowing',           spr: 1.5,  p1: '#2c1f0e', p2: '#a07a3a', initial: 'R' },
};

export const HOME_SPR = 1.0;

export function studioCost(key: string): number {
  const s = STUDIOS[key];
  if (!s) return 1;
  return Math.round((s.spr / HOME_SPR) * 100) / 100;
}
