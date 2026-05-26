// Member home / dashboard — ported from 03-app-screens-home.jsx.
// Decorative product screenshot. Inline styles match the original.

import {
  T, FN_STUDIOS, FNIcon, PeakBadge, FNTabBar,
} from './phone-ui';

type UpcomingProps = {
  when: string;
  studio: string;
  cls: string;
  cost: number;
  status: 'booked' | 'waitlist';
  pos?: number;
  peak?: boolean;
};

function UpcomingRow({ when, studio, cls, cost, status, pos, peak }: UpcomingProps) {
  const s = FN_STUDIOS[studio];
  return (
    <div style={{ background: T.surface, borderRadius: 18, padding: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
      <div style={{
        width: 56, height: 56, borderRadius: 12,
        background: `linear-gradient(135deg, ${s.p1}, ${s.p2})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontWeight: 700, fontSize: 17, flexShrink: 0,
      }}>{s.initial}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 2 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: T.accent }}>{when}</span>
          {peak && <PeakBadge />}
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: T.label1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cls}</div>
        <div style={{ fontSize: 11, color: T.label2, marginTop: 1 }}>{s.short} · {cost} credit{cost !== 1 ? 's' : ''}</div>
      </div>
      <div style={{ flexShrink: 0 }}>
        {status === 'booked' ? (
          <div style={{ padding: '4px 8px', background: 'rgba(52,199,89,0.14)', color: T.success, fontSize: 10.5, fontWeight: 700, borderRadius: 6, letterSpacing: 0.3, textTransform: 'uppercase' }}>Booked</div>
        ) : (
          <div style={{ padding: '4px 8px', background: 'rgba(255,159,10,0.14)', color: T.warn, fontSize: 10.5, fontWeight: 700, borderRadius: 6, letterSpacing: 0.3, textTransform: 'uppercase' }}>#{pos} waitlist</div>
        )}
      </div>
    </div>
  );
}

export default function ScreenHome() {
  return (
    <div role="img" aria-label="Moose member home screen" style={{
      background: T.bg, height: '100%', position: 'relative', overflow: 'hidden', paddingBottom: 100,
      fontFamily: '-apple-system, "SF Pro Text", system-ui, sans-serif',
    }}>
      {/* Top greeting bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px 20px 0' }}>
        <div>
          <div style={{ fontSize: 12, color: T.label2, fontWeight: 500 }}>Tuesday · Mar 18</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: T.label1, letterSpacing: -0.4, marginTop: 2 }}>
            Ready to move, Alex?
          </div>
        </div>
        <div style={{ background: T.surface, width: 40, height: 40, borderRadius: 20, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FNIcon name="bell" size={20} color={T.label1} />
          <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: 4, background: T.accent, border: `1.5px solid ${T.surface}` }} />
        </div>
      </div>

      {/* Credits hero card */}
      <div style={{ margin: '20px 20px 0', padding: '20px 20px 18px', background: T.surface, borderRadius: 22, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -40, top: -40, width: 180, height: 180, borderRadius: '50%', background: T.accentGlow }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: T.label2, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.6 }}>Credits this month</div>
            <div style={{ fontSize: 44, fontWeight: 700, color: T.label1, letterSpacing: -2, lineHeight: 1, marginTop: 6, fontVariantNumeric: 'tabular-nums' }}>
              3.83<span style={{ color: T.label2, fontSize: 19, fontWeight: 600, letterSpacing: -0.5 }}> / 6</span>
            </div>
            <div style={{ fontSize: 12, color: T.label2, marginTop: 8 }}>
              Refreshes <span style={{ color: T.label1, fontWeight: 600 }}>in 13 days</span> · Apr 1
            </div>
          </div>
          <div style={{ position: 'relative', width: 88, height: 88 }}>
            <svg width="88" height="88" viewBox="0 0 88 88">
              <circle cx="44" cy="44" r="38" fill="none" stroke={T.label4} strokeWidth="6" />
              <circle cx="44" cy="44" r="38" fill="none" stroke={T.accent} strokeWidth="6"
                strokeDasharray={`${(3.83 / 6) * 238.7} 238.7`} strokeLinecap="round" transform="rotate(-90 44 44)" />
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.label1, fontVariantNumeric: 'tabular-nums' }}>64%</div>
              <div style={{ fontSize: 9, color: T.label2, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.4 }}>used</div>
            </div>
          </div>
        </div>
      </div>

      {/* Browse classes CTA */}
      <div style={{ margin: '12px 20px 0', display: 'flex', gap: 10 }}>
        <div style={{
          flex: 1, background: T.label1, color: T.bg, borderRadius: 16,
          padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <FNIcon name="calendar" size={20} color={T.bg} />
            <span style={{ fontSize: 13.5, fontWeight: 600 }}>Browse classes</span>
          </div>
          <FNIcon name="arrow-r" size={18} color={T.bg} />
        </div>
      </div>

      {/* Upcoming list */}
      <div style={{ margin: '24px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.label1, letterSpacing: -0.3 }}>Up next</div>
          <span style={{ fontSize: 12, color: T.accent, fontWeight: 600 }}>See all 4</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <UpcomingRow when="Today · 6:30 PM"    studio="ironworks" cls="Boxing Conditioning"  cost={1.5}  status="booked" />
          <UpcomingRow when="Tomorrow · 7:00 AM" studio="pulse"     cls="Reformer 60 — Power"  cost={1}    status="waitlist" pos={3} />
          <UpcomingRow when="Thu · 12:00 PM"     studio="spincity"  cls="Lunch Express"        cost={0.75} status="booked" peak />
        </div>
      </div>

      <FNTabBar active="home" />
    </div>
  );
}
