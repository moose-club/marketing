// Shared phone-screen helpers — ported from 01/02-* design source.
// These render *inside* the PhoneFrame and represent the Moose member
// app. Marketing-site styling rules don't apply here: this is a
// decorative product screenshot, authored with inline styles to mirror
// the original JSX preview exactly.

import type { CSSProperties, ReactNode } from 'react';
import { phoneTheme, type PhoneTheme } from '../../data/tokens';

export const T = phoneTheme;

// ── Studio brand "photos" — generative gradient + initial ──
export type PhoneStudio = {
  name: string;
  short: string;
  mod: string;
  spr: number;
  p1: string;
  p2: string;
  initial: string;
};

export const FN_STUDIOS: Record<string, PhoneStudio> = {
  ironworks:  { name: 'Ironworks Boxing', short: 'Ironworks',  mod: 'Boxing',           spr: 1.5,  p1: '#2a1810', p2: '#7a2a1a', initial: 'I' },
  flowyoga:   { name: 'Flow & Co. Yoga',  short: 'Flow & Co.', mod: 'Hot Yoga',         spr: 1.0,  p1: '#1f3d2b', p2: '#6e9c5d', initial: 'F' },
  pulse:      { name: 'Pulse Reformer',   short: 'Pulse',      mod: 'Reformer Pilates', spr: 1.0,  p1: '#4a1f3d', p2: '#a35da6', initial: 'P' },
  spincity:   { name: 'Spin City',        short: 'Spin City',  mod: 'Cycle',            spr: 0.75, p1: '#0e1b2c', p2: '#3d6cab', initial: 'S' },
  forge:      { name: 'The Forge HIIT',   short: 'The Forge',  mod: 'HIIT',             spr: 1.5,  p1: '#1a1a1a', p2: '#5a5a5a', initial: 'F' },
  barre9:     { name: 'Barre Nine',       short: 'Barre Nine', mod: 'Barre',            spr: 1.0,  p1: '#3d2a4a', p2: '#a07ab5', initial: 'B' },
  rowhouse:   { name: 'Rowhouse Athletic',short: 'Rowhouse',   mod: 'Rowing',           spr: 1.5,  p1: '#2c1f0e', p2: '#a07a3a', initial: 'R' },
};

const FN_HOME_SPR = 1.0;
export const fnCost = (key: string): number => {
  const s = FN_STUDIOS[key];
  if (!s) return 1;
  return Math.round((s.spr / FN_HOME_SPR) * 100) / 100;
};

// ── SF-style icon set ──
const ICON_PATHS: Record<string, ReactNode> = {
  home:      <path d="M3 11l9-8 9 8v9a2 2 0 01-2 2h-3v-7h-8v7H5a2 2 0 01-2-2v-9z" />,
  calendar:  <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></>,
  list:      <><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6"  r="1.2" fill="currentColor"/><circle cx="3.5" cy="12" r="1.2" fill="currentColor"/><circle cx="3.5" cy="18" r="1.2" fill="currentColor"/></>,
  user:      <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></>,
  bolt:      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  chevR:     <path d="M9 6l6 6-6 6"/>,
  chevL:     <path d="M15 6l-6 6 6 6"/>,
  plus:      <path d="M12 5v14M5 12h14"/>,
  check:     <path d="M5 12l5 5 9-11"/>,
  x:         <path d="M6 6l12 12M18 6L6 18"/>,
  clock:     <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  pin:       <><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></>,
  filter:    <path d="M4 5h16M7 12h10M10 19h4"/>,
  bell:      <><path d="M6 16V11a6 6 0 1112 0v5l1.5 2h-15L6 16z"/><path d="M10 21h4"/></>,
  star:      <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
  'arrow-r': <path d="M5 12h14M13 6l6 6-6 6"/>,
};

const SOLID_ICONS = new Set(['bolt', 'star']);

type IconProps = {
  name: keyof typeof ICON_PATHS | string;
  size?: number;
  color?: string;
  stroke?: number;
};

export function FNIcon({ name, size = 22, color = 'currentColor', stroke = 1.8 }: IconProps) {
  const path = ICON_PATHS[name];
  if (!path) return null;
  const solid = SOLID_ICONS.has(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={solid ? color : 'none'}
      stroke={solid ? 'none' : color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}

// ── LiquidGlass — iOS 26 frosted surface ──
export function LiquidGlass({
  children, radius = 22, intensity = 1, style,
}: { children: ReactNode; radius?: number; intensity?: number; style?: CSSProperties }) {
  const tint = `rgba(255,255,255,${0.50 + 0.25 * intensity})`;
  return (
    <div style={{ position: 'relative', borderRadius: radius, ...style }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: radius,
        background: tint,
        backdropFilter: 'blur(24px) saturate(190%)',
        WebkitBackdropFilter: 'blur(24px) saturate(190%)',
        boxShadow: 'inset 1px 1px 0.5px rgba(255,255,255,0.85), inset -1px -1px 0.5px rgba(255,255,255,0.4)',
        border: '0.5px solid rgba(0,0,0,0.05)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, borderRadius: radius, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '60%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.45), transparent)',
        }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

// ── PeakBadge ──
export function PeakBadge({ label = 'Peak', countdown }: { label?: string; countdown?: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 8px 3px 6px', borderRadius: 999,
      background: 'rgba(255,149,0,0.14)',
      color: T.peak, fontSize: 11, fontWeight: 700, letterSpacing: 0.2,
    }}>
      <FNIcon name="bolt" size={11} color={T.peak} />
      <span style={{ fontVariantNumeric: 'tabular-nums' }}>{countdown || label}</span>
    </div>
  );
}

// ── StudioPhoto — placeholder image with brand gradient & initial ──
export function StudioPhoto({
  studio, height = 120, radius = 16, style,
}: { studio: string; height?: number; radius?: number; style?: CSSProperties }) {
  const s = FN_STUDIOS[studio];
  if (!s) return null;
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      background: `linear-gradient(155deg, ${s.p1}, ${s.p2})`,
      height, borderRadius: radius, ...style,
    }}>
      <div style={{
        position: 'absolute', top: 10, left: 12, fontWeight: 700, fontSize: 10,
        letterSpacing: '0.18em', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase',
        zIndex: 1,
      }}>{s.short}</div>
      <div style={{
        position: 'absolute', right: -6, bottom: -16,
        fontWeight: 800, fontSize: 96, letterSpacing: '-0.05em',
        color: 'rgba(255,255,255,0.10)', lineHeight: 1, zIndex: 0,
      }}>{s.initial}</div>
    </div>
  );
}

// ── FNButton ──
type ButtonKind = 'primary' | 'secondary' | 'ghost' | 'danger';
export function FNButton({
  kind = 'primary', children, leading, trailing, onClick,
}: {
  kind?: ButtonKind;
  children: ReactNode;
  leading?: ReactNode;
  trailing?: ReactNode;
  onClick?: () => void;
}) {
  const styles: Record<ButtonKind, CSSProperties> = {
    primary:   { background: T.accent, color: T.onAccent },
    secondary: { background: T.surfaceTint, color: T.label1 },
    ghost:     { background: 'transparent', color: T.accent },
    danger:    { background: 'rgba(255,59,48,0.12)', color: T.danger },
  };
  return (
    <button onClick={onClick} style={{
      height: 48, borderRadius: 14, border: 'none', font: 'inherit',
      fontSize: 15, fontWeight: 600, letterSpacing: -0.2,
      padding: '0 18px', display: 'inline-flex', alignItems: 'center',
      justifyContent: 'center', gap: 8, cursor: 'pointer', width: '100%',
      ...styles[kind],
    }}>
      {leading}{children}{trailing}
    </button>
  );
}

// ── Top bar (header with optional title + credits pill) ──
export function FNTopBar() {
  return (
    <div style={{ padding: '56px 14px 6px', minHeight: 32 }} />
  );
}

// ── Tab bar — fixed at bottom of phone screen ──
export function FNTabBar({ active = 'home' }: { active?: string }) {
  const tabs = [
    { k: 'home',     i: 'home',     label: 'Home' },
    { k: 'schedule', i: 'calendar', label: 'Schedule' },
    { k: 'sessions', i: 'list',     label: 'Sessions' },
    { k: 'account',  i: 'user',     label: 'Account' },
  ];
  return (
    <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14, zIndex: 5 }}>
      <LiquidGlass radius={28} intensity={1.1}>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '8px 6px 10px' }}>
          {tabs.map(t => {
            const on = t.k === active;
            return (
              <div key={t.k} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 2, padding: '4px 10px', minWidth: 50,
              }}>
                <FNIcon name={t.i} size={22} color={on ? T.accent : T.label2} stroke={on ? 2.2 : 1.8} />
                <span style={{ fontSize: 9, fontWeight: 600, color: on ? T.accent : T.label2 }}>{t.label}</span>
              </div>
            );
          })}
        </div>
      </LiquidGlass>
    </div>
  );
}

export type { PhoneTheme };
