// Cancellation confirm sheet over a blurred Sessions-style background.
// Ported from 05-app-screens-cancel-settings.jsx — simplified so we
// don't need to ship a separate ScreenSessions just for the blur.

import {
  T, FN_STUDIOS, FNIcon, FNTabBar,
} from './phone-ui';

function GhostSessions() {
  // A static, blurred Sessions list — purely background decoration.
  const rows = [
    { day: 'Tue', date: '18', studio: 'ironworks', cls: 'Boxing Conditioning', when: '6:30 PM' },
    { day: 'Wed', date: '19', studio: 'pulse',     cls: 'Reformer 60 — Power', when: '7:00 AM' },
    { day: 'Thu', date: '20', studio: 'spincity',  cls: 'Lunch Express',       when: '12:00 PM' },
    { day: 'Mon', date: '24', studio: 'forge',     cls: 'HIIT 45',             when: '8:00 AM' },
  ];
  return (
    <div style={{ background: T.bg, height: '100%', paddingTop: 56 }}>
      <div style={{ padding: '0 20px 12px' }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: T.label1, letterSpacing: -0.6 }}>Sessions</div>
        <div style={{ fontSize: 13, color: T.label2, marginTop: 2 }}>You've got 4 sessions ahead</div>
      </div>
      <div style={{ background: T.surface, margin: '0 16px', borderRadius: 22 }}>
        {rows.map((it, i) => {
          const s = FN_STUDIOS[it.studio];
          return (
            <div key={i} style={{
              display: 'flex', gap: 12, padding: 14, alignItems: 'center',
              borderTop: i ? `0.5px solid ${T.sep}` : 'none',
            }}>
              <div style={{
                width: 48, height: 56, borderRadius: 10,
                background: `linear-gradient(180deg, ${s.p1}, ${s.p2})`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                color: '#fff', flexShrink: 0,
              }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.8, letterSpacing: 0.5 }}>{it.day.toUpperCase()}</div>
                <div style={{ fontSize: 18, fontWeight: 700, lineHeight: 1, marginTop: 1, fontVariantNumeric: 'tabular-nums' }}>{it.date}</div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, color: T.label2 }}>{it.when}</div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: T.label1, marginTop: 2 }}>{it.cls}</div>
                <div style={{ fontSize: 11, color: T.label2, marginTop: 1 }}>{s.short}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ScreenCancelFlow() {
  const s = FN_STUDIOS.ironworks;
  return (
    <div role="img" aria-label="Moose cancellation flow" style={{
      background: T.bg, height: '100%', position: 'relative', overflow: 'hidden',
      fontFamily: '-apple-system, "SF Pro Text", system-ui, sans-serif',
    }}>
      <div style={{ filter: 'blur(6px) brightness(0.55)', height: '100%' }}>
        <GhostSessions />
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: T.surface, borderRadius: '28px 28px 0 0',
        padding: '20px 20px 50px',
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: T.label3, margin: '0 auto 18px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: `linear-gradient(135deg, ${s.p1}, ${s.p2})`,
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: 18, flexShrink: 0,
          }}>{s.initial}</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: T.label1, letterSpacing: -0.3 }}>Cancel this booking?</div>
            <div style={{ fontSize: 11, color: T.label2, marginTop: 1 }}>Boxing Conditioning · Tue 6:30 PM</div>
          </div>
        </div>

        <div style={{ background: 'rgba(52,199,89,0.10)', borderRadius: 14, padding: 12, display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
          <FNIcon name="check" size={18} color={T.success} stroke={2.4} />
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.success }}>You're inside the free window</div>
            <div style={{ fontSize: 11, color: T.label2, marginTop: 2 }}>
              Cancellation is free up to 4 hours before class — that's <strong style={{ color: T.label1 }}>Tue 2:30 PM</strong>.
            </div>
          </div>
        </div>

        <div style={{
          background: T.surface2, borderRadius: 14, padding: '12px 14px', marginBottom: 18,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: 12, color: T.label2 }}>Credits returned</span>
          <span style={{ fontSize: 13.5, fontWeight: 700, color: T.success, fontVariantNumeric: 'tabular-nums' }}>+1.5</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button style={{
            height: 48, borderRadius: 14, border: 'none',
            background: 'rgba(255,59,48,0.12)', color: T.danger,
            fontSize: 15, fontWeight: 600, cursor: 'pointer',
          }}>Yes, cancel booking</button>
          <button style={{
            height: 48, borderRadius: 14, border: 'none',
            background: 'transparent', color: T.accent,
            fontSize: 15, fontWeight: 600, cursor: 'pointer',
          }}>Keep my booking</button>
        </div>
      </div>

      <FNTabBar active="sessions" />
    </div>
  );
}
