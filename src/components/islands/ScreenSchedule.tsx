// Schedule list — ported from 04-app-screens-schedule.jsx.
// Decorative product screenshot. Booking sheet is interactive (the
// only stateful island) but it never mutates real data.

import { useState } from 'react';
import {
  T, FN_STUDIOS, fnCost, FNIcon, PeakBadge, StudioPhoto, FNTabBar,
} from './phone-ui';

type Cls = {
  id: string;
  time: string;
  ampm: 'AM' | 'PM';
  dur: number;
  studio: string;
  cls: string;
  spaces: number;
  peak?: boolean;
  locked?: boolean;
  openIn?: string;
};

const FN_CLASSES: Cls[] = [
  { id: 'c1', time: '6:00',  ampm: 'AM', dur: 45, studio: 'forge',     cls: 'Sunrise HIIT',         spaces: 4,  peak: false },
  { id: 'c2', time: '7:00',  ampm: 'AM', dur: 50, studio: 'pulse',     cls: 'Reformer 60 — Power',  spaces: 0,  peak: true  },
  { id: 'c3', time: '8:30',  ampm: 'AM', dur: 60, studio: 'ironworks', cls: 'Boxing Conditioning',  spaces: 8,  peak: false },
  { id: 'c4', time: '12:00', ampm: 'PM', dur: 45, studio: 'spincity',  cls: 'Lunch Express',        spaces: 2,  peak: true, locked: true, openIn: '2h 14m' },
  { id: 'c5', time: '5:30',  ampm: 'PM', dur: 60, studio: 'barre9',    cls: 'Barre Sculpt',         spaces: 11, peak: false },
  { id: 'c6', time: '6:30',  ampm: 'PM', dur: 60, studio: 'rowhouse',  cls: 'Row & Strength',       spaces: 6,  peak: true  },
];

function ClassCard({ c, onBook }: { c: Cls; onBook: () => void }) {
  const s = FN_STUDIOS[c.studio];
  const cost = fnCost(c.studio);
  const isWaitlist = c.spaces === 0;
  return (
    <div style={{
      background: T.surface, borderRadius: 20, padding: 12,
      display: 'flex', gap: 12,
      border: c.peak ? '1px solid rgba(255,149,0,0.18)' : 'none',
    }}>
      <StudioPhoto studio={c.studio} height={92} radius={14} style={{ width: 92, flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: T.label1, letterSpacing: -0.4, fontVariantNumeric: 'tabular-nums' }}>
            {c.time}<span style={{ fontSize: 10.5, marginLeft: 2, color: T.label2 }}>{c.ampm}</span>
          </span>
          <span style={{ fontSize: 11, color: T.label2 }}>· {c.dur} min</span>
          {c.peak && (c.locked ? <PeakBadge countdown={`Opens ${c.openIn}`} /> : <PeakBadge />)}
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: T.label1, marginTop: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {c.cls}
        </div>
        <div style={{ fontSize: 11, color: T.label2, marginTop: 1 }}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.short} · {s.mod}</span>
        </div>
        <div style={{ marginTop: 'auto', paddingTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 11, color: T.label2, fontVariantNumeric: 'tabular-nums' }}>
            <span style={{ color: T.label1, fontWeight: 700, fontSize: 12 }}>{cost}</span> credit{cost !== 1 ? 's' : ''}
            {!c.locked && c.spaces > 0 && <span style={{ marginLeft: 6 }}>· {c.spaces} left</span>}
            {!c.locked && c.spaces === 0 && <span style={{ marginLeft: 6, color: T.warn, fontWeight: 600 }}>· Full</span>}
          </div>
          <button onClick={c.locked ? undefined : onBook} disabled={c.locked} style={{
            border: 'none', cursor: c.locked ? 'default' : 'pointer', font: 'inherit',
            padding: '6px 14px', borderRadius: 10,
            background: c.locked ? T.surfaceTint : (isWaitlist ? T.surfaceTint : T.accent),
            color: c.locked ? T.label2 : (isWaitlist ? T.label1 : T.onAccent),
            fontSize: 12, fontWeight: 600,
          }}>{c.locked ? 'Locked' : (isWaitlist ? 'Join waitlist' : 'Book')}</button>
        </div>
      </div>
    </div>
  );
}

function BookingSheet({ c, onDismiss }: { c: Cls; onDismiss: () => void }) {
  const s = FN_STUDIOS[c.studio];
  const cost = fnCost(c.studio);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <>
      <div onClick={onDismiss} style={{
        position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)',
        backdropFilter: 'blur(2px)', zIndex: 50,
      }} />
      <div role="dialog" aria-label="Confirm booking" style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        background: T.bg, borderRadius: '24px 24px 0 0',
        padding: '8px 18px 34px',
        boxShadow: '0 -16px 50px rgba(0,0,0,0.32)',
        zIndex: 51,
      }}>
        <div style={{ width: 38, height: 4, borderRadius: 2, background: T.label3, margin: '6px auto 14px' }} />

        {!confirmed ? (
          <>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: T.label1, letterSpacing: -0.4 }}>Confirm booking</div>
              <button onClick={onDismiss} aria-label="Close" style={{
                background: T.surfaceTint, border: 'none', cursor: 'pointer',
                width: 28, height: 28, borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}><FNIcon name="x" size={14} color={T.label1} stroke={2.2} /></button>
            </div>

            <div style={{ background: T.surface, borderRadius: 18, padding: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
              <StudioPhoto studio={c.studio} height={64} radius={12} style={{ width: 64, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: T.label1, fontVariantNumeric: 'tabular-nums' }}>
                  {c.time}{c.ampm} · {c.dur} min
                  {c.peak && <span style={{ marginLeft: 6 }}><PeakBadge /></span>}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.label1, marginTop: 2 }}>{c.cls}</div>
                <div style={{ fontSize: 11, color: T.label2, marginTop: 1 }}>{s.name} · {s.mod}</div>
              </div>
            </div>

            <div style={{ background: T.surface, borderRadius: 18, padding: '4px 14px', marginTop: 10 }}>
              {[
                { l: 'Class cost',          r: `${cost} credit${cost !== 1 ? 's' : ''}` },
                { l: 'Balance after',       r: `${(3.83 - cost).toFixed(2)} / 6` },
                { l: 'Free cancel until',   r: 'Tue · 2:30 PM' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 0', borderTop: i ? `0.5px solid ${T.sep}` : 'none',
                }}>
                  <span style={{ fontSize: 13, color: T.label2 }}>{row.l}</span>
                  <span style={{ fontSize: 13, color: T.label1, fontWeight: 600 }}>{row.r}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <button onClick={onDismiss} style={{
                flex: 1, height: 48, borderRadius: 14, border: 'none',
                background: T.surfaceTint, color: T.label1,
                fontSize: 15, fontWeight: 600, cursor: 'pointer',
              }}>Cancel</button>
              <button onClick={() => setConfirmed(true)} style={{
                flex: 1.4, height: 48, borderRadius: 14, border: 'none',
                background: T.accent, color: T.onAccent,
                fontSize: 15, fontWeight: 600, cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}>Confirm <span style={{ opacity: 0.85, fontSize: 13 }}>{cost} cr</span></button>
            </div>
          </>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 22, background: T.success,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}><FNIcon name="check" size={22} color="#fff" stroke={3} /></div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, color: T.label1, letterSpacing: -0.3 }}>You're booked</div>
                <div style={{ fontSize: 12, color: T.label2, marginTop: 1 }}>{c.cls} · {c.time} {c.ampm}</div>
              </div>
            </div>
            <button onClick={onDismiss} style={{
              width: '100%', height: 48, borderRadius: 14, border: 'none',
              background: T.accent, color: T.onAccent,
              fontSize: 15, fontWeight: 600, cursor: 'pointer',
            }}>Done</button>
          </div>
        )}
      </div>
    </>
  );
}

export default function ScreenSchedule() {
  const [bookingId, setBookingId] = useState<string | null>(null);
  const booking = bookingId ? FN_CLASSES.find(c => c.id === bookingId) ?? null : null;

  return (
    <div role="img" aria-label="Moose schedule and booking screen" style={{
      background: T.bg, height: '100%', position: 'relative', overflow: 'hidden',
      fontFamily: '-apple-system, "SF Pro Text", system-ui, sans-serif',
    }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'auto', paddingBottom: 100 }}>
        <div style={{ padding: '56px 14px 6px', minHeight: 32 }} />
        <div style={{ padding: '0 20px 4px' }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: T.label1, letterSpacing: -0.6 }}>Schedule</div>
          <div style={{ fontSize: 13, color: T.label2, marginTop: 2 }}>Partner studios near you</div>
        </div>

        {/* Date strip */}
        <div style={{ padding: '12px 14px 8px', display: 'flex', gap: 6, overflow: 'auto' }}>
          {[
            { d: 'Mon', n: '17' }, { d: 'Tue', n: '18', sel: true }, { d: 'Wed', n: '19' }, { d: 'Thu', n: '20' },
            { d: 'Fri', n: '21' }, { d: 'Sat', n: '22' }, { d: 'Sun', n: '23' },
          ].map((d, i) => (
            <div key={i} style={{
              flexShrink: 0, width: 46, padding: '8px 0', borderRadius: 14,
              background: d.sel ? T.label1 : T.surface,
              color: d.sel ? T.bg : T.label1,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            }}>
              <span style={{ fontSize: 10.5, fontWeight: 600, opacity: 0.7 }}>{d.d.toUpperCase()}</span>
              <span style={{ fontSize: 14.5, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{d.n}</span>
            </div>
          ))}
        </div>

        {/* Filter row */}
        <div style={{ padding: '4px 16px 12px', display: 'flex', gap: 6, overflow: 'auto' }}>
          {[
            { l: 'All studios', sel: true }, { l: 'Boxing' }, { l: 'Yoga' }, { l: 'Reformer' }, { l: 'Cycle' }, { l: 'HIIT' },
          ].map((f, i) => (
            <div key={i} style={{
              flexShrink: 0, padding: '7px 14px', borderRadius: 999,
              background: f.sel ? T.label1 : T.surface,
              color: f.sel ? T.bg : T.label1,
              fontSize: 12, fontWeight: 600,
            }}>{f.l}</div>
          ))}
          <div style={{
            flexShrink: 0, width: 36, height: 36, borderRadius: 18,
            background: T.surface, color: T.label1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><FNIcon name="filter" size={18} color={T.label1} /></div>
        </div>

        {/* Class list */}
        <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FN_CLASSES.map(c => (
            <ClassCard key={c.id} c={c} onBook={() => setBookingId(c.id)} />
          ))}
        </div>
      </div>

      {booking && <BookingSheet c={booking} onDismiss={() => setBookingId(null)} />}

      <FNTabBar active="schedule" />
    </div>
  );
}
