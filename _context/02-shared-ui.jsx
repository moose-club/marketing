/* eslint-disable */
// ── Flex Network — shared UI components ────────────────────────

// Studio brand "photos" — generative gradient + initial. Cheap, on-brand.
const FN_STUDIOS = {
  ironworks:  { name: 'Ironworks Boxing', short: 'Ironworks', mod: 'Boxing',          spr: 1.5, p1: '#2a1810', p2: '#7a2a1a', initial: 'I' },
  flowyoga:   { name: 'Flow & Co. Yoga',  short: 'Flow & Co.', mod: 'Hot Yoga',       spr: 1.0, p1: '#1f3d2b', p2: '#6e9c5d', initial: 'F' },
  pulse:      { name: 'Pulse Reformer',   short: 'Pulse',     mod: 'Reformer Pilates', spr: 1.0, p1: '#4a1f3d', p2: '#a35da6', initial: 'P' },
  spincity:   { name: 'Spin City',        short: 'Spin City', mod: 'Cycle',           spr: 0.75, p1: '#0e1b2c', p2: '#3d6cab', initial: 'S' },
  forge:      { name: 'The Forge HIIT',   short: 'The Forge', mod: 'HIIT',            spr: 1.5, p1: '#1a1a1a', p2: '#5a5a5a', initial: 'F' },
  barre9:     { name: 'Barre Nine',       short: 'Barre Nine', mod: 'Barre',          spr: 1.0, p1: '#3d2a4a', p2: '#a07ab5', initial: 'B' },
  rowhouse:   { name: 'Rowhouse Athletic', short: 'Rowhouse', mod: 'Rowing',         spr: 1.5, p1: '#2c1f0e', p2: '#a07a3a', initial: 'R' },
};
window.FN_STUDIOS = FN_STUDIOS;

// ── LiquidGlass — iOS 26 style frosted surface w/ shine + edge ──────
function LiquidGlass({ T, children, radius = 22, intensity = 1, tone = 'auto', style = {}, className = '' }) {
  const dark = tone === 'dark' || (tone === 'auto' && T.dark);
  const tint = dark
    ? `rgba(28,28,30,${0.55 + 0.2 * intensity})`
    : `rgba(255,255,255,${0.50 + 0.25 * intensity})`;
  return (
    <div className={className} style={{ position: 'relative', borderRadius: radius, ...style }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: radius,
        background: tint,
        backdropFilter: 'blur(24px) saturate(190%)',
        WebkitBackdropFilter: 'blur(24px) saturate(190%)',
        boxShadow: dark
          ? 'inset 1px 1px 0.5px rgba(255,255,255,0.18), inset -1px -1px 0.5px rgba(255,255,255,0.06)'
          : 'inset 1px 1px 0.5px rgba(255,255,255,0.85), inset -1px -1px 0.5px rgba(255,255,255,0.4)',
        border: dark ? '0.5px solid rgba(255,255,255,0.12)' : '0.5px solid rgba(0,0,0,0.05)',
      }} />
      {/* specular highlight */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: radius, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '60%',
          background: dark
            ? 'linear-gradient(180deg, rgba(255,255,255,0.06), transparent)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.45), transparent)',
        }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
window.LiquidGlass = LiquidGlass;

// Home studio fixed for this user; SPR drives credit cost calc
const FN_HOME_SPR = 1.0; // user has a 1-credit home studio
const fnCost = (studioKey) => {
  const s = FN_STUDIOS[studioKey];
  if (!s) return 1;
  // dest SPR ÷ home SPR
  return Math.round((s.spr / FN_HOME_SPR) * 100) / 100;
};
window.fnCost = fnCost;

// ── StudioPhoto — placeholder image with brand gradient & initial ──
function StudioPhoto({ studio, height = 120, radius = 16, children, style = {} }) {
  const s = FN_STUDIOS[studio];
  if (!s) return null;
  return (
    <div className="studio-photo" style={{
      '--p1': s.p1, '--p2': s.p2,
      height, borderRadius: radius, ...style,
    }}>
      <div style={{
        position: 'absolute', top: 12, left: 14, fontWeight: 700, fontSize: 11,
        letterSpacing: '0.18em', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase',
        zIndex: 1,
      }}>{s.short}</div>
      <div style={{
        position: 'absolute', right: -6, bottom: -18,
        fontWeight: 800, fontSize: 110, letterSpacing: '-0.05em',
        color: 'rgba(255,255,255,0.10)', lineHeight: 1, zIndex: 0,
      }}>{s.initial}</div>
      {children && <div style={{ position: 'relative', padding: 14, zIndex: 2, width: '100%' }}>{children}</div>}
    </div>
  );
}
window.StudioPhoto = StudioPhoto;

// ── CreditPill — persistent header chip showing remaining credits ──
function CreditPill({ T, credits = 3.83, max = 6, refresh = 'Apr 1', compact = false }) {
  const pct = Math.max(0, Math.min(1, credits / max));
  return (
    <LiquidGlass T={T} radius={999} style={{ display: 'inline-flex' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: compact ? '4px 10px 4px 6px' : '5px 12px 5px 7px',
      }}>
        <svg width="20" height="20" viewBox="0 0 22 22">
          <circle cx="11" cy="11" r="8.5" fill="none" stroke={T.label4} strokeWidth="2.5"/>
          <circle cx="11" cy="11" r="8.5" fill="none" stroke={T.accent} strokeWidth="2.5"
            strokeDasharray={`${pct * 53.4} 53.4`} strokeLinecap="round" transform="rotate(-90 11 11)" />
        </svg>
        <div className="fn-row fn-gap-4 tnum" style={{ fontSize: 12, fontWeight: 600, color: T.label1 }}>
          <span>{credits.toFixed(2).replace(/\.?0+$/, '')}</span>
          <span style={{ color: T.label2, fontWeight: 500 }}>/ {max}</span>
        </div>
        {!compact && <span style={{ fontSize: 10, color: T.label2, fontWeight: 500 }}>credits</span>}
      </div>
    </LiquidGlass>
  );
}
window.CreditPill = CreditPill;

// ── Button — primary / secondary / ghost ──
function FNButton({ T, kind = 'primary', children, leading, trailing, size = 'lg', full = true, onClick, disabled }) {
  const h = size === 'lg' ? 48 : size === 'md' ? 40 : 32;
  const r = size === 'lg' ? 14 : 12;
  const fs = size === 'lg' ? 15 : size === 'md' ? 14 : 13;
  const styles = {
    primary: { background: T.accent, color: T.onAccent },
    secondary: { background: T.surfaceTint, color: T.label1 },
    ghost: { background: 'transparent', color: T.accent },
    danger: { background: 'rgba(255,59,48,0.12)', color: T.danger },
  };
  return (
    <button className="tap" onClick={onClick} disabled={disabled} style={{
      height: h, borderRadius: r, border: 'none', font: 'inherit',
      fontSize: fs, fontWeight: 600, letterSpacing: -0.2,
      padding: '0 18px', display: 'inline-flex', alignItems: 'center',
      justifyContent: 'center', gap: 8, cursor: 'pointer',
      width: full ? '100%' : 'auto', opacity: disabled ? 0.4 : 1,
      ...styles[kind],
    }}>
      {leading}{children}{trailing}
    </button>
  );
}
window.FNButton = FNButton;

// ── PeakBadge — lightning bolt chip ──
function PeakBadge({ T, label = 'Peak', countdown }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 8px 3px 6px', borderRadius: 999,
      background: T.dark ? 'rgba(255,214,10,0.16)' : 'rgba(255,149,0,0.14)',
      color: T.peak, fontSize: 11, fontWeight: 700, letterSpacing: 0.2,
    }}>
      <FNIcon name="bolt" size={11} color={T.peak} />
      <span className="tnum">{countdown || label}</span>
    </div>
  );
}
window.PeakBadge = PeakBadge;

// ── Tab bar ──
function FNTabBar({ T, active = 'home', onChange = () => {} }) {
  const tabs = [
    { k: 'home',     i: 'home',     label: 'Home' },
    { k: 'schedule', i: 'calendar', label: 'Schedule' },
    { k: 'sessions', i: 'list',     label: 'Sessions' },
    { k: 'account',  i: 'user',     label: 'Account' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 14, left: 14, right: 14, zIndex: 5,
    }}>
      <LiquidGlass T={T} radius={28} intensity={1.1}>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '8px 6px 10px' }}>
          {tabs.map(t => {
            const on = t.k === active;
            return (
              <button key={t.k} onClick={() => onChange(t.k)} style={{
                border: 'none', background: 'transparent', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 2, padding: '4px 10px', minWidth: 50,
              }}>
                <FNIcon name={t.i} size={22} color={on ? T.accent : T.label2} stroke={on ? 2.2 : 1.8} />
                <span style={{ fontSize: 9, fontWeight: 600, color: on ? T.accent : T.label2 }}>{t.label}</span>
              </button>
            );
          })}
        </div>
      </LiquidGlass>
    </div>
  );
}
window.FNTabBar = FNTabBar;

// ── Generic top bar with title + credit pill ──
function FNTopBar({ T, title, large, leading, trailing, credits = 3.83 }) {
  return (
    <>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '56px 14px 6px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, minHeight: 32 }}>
          {leading}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {trailing}
          <CreditPill T={T} credits={credits} compact />
        </div>
      </div>
      {title && (
        <div style={{
          padding: '2px 20px 10px',
          fontSize: large ? 28 : 18,
          fontWeight: 700, letterSpacing: -0.4,
          color: T.label1,
        }}>{title}</div>
      )}
    </>
  );
}
window.FNTopBar = FNTopBar;

// ── Phone wrap — cleaner alternative when we don't want IOSDevice's nav ──
function FNPhone({ T, children, label }) {
  return (
    <div style={{
      width: 360, height: 760, borderRadius: 44, position: 'relative',
      background: T.bg, overflow: 'hidden',
      boxShadow: '0 30px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.10), inset 0 0 0 6px #0a0a0a',
      fontFamily: '-apple-system, "SF Pro Text", system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* dynamic island */}
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 110, height: 32, borderRadius: 22, background: '#000', zIndex: 50,
      }} />
      {/* status bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
        display: 'flex', justifyContent: 'space-between',
        padding: '18px 28px 10px',
      }}>
        <span style={{ color: T.label1, fontWeight: 600, fontSize: 15 }}>9:41</span>
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="7" width="3" height="4" rx="0.5" fill={T.label1}/><rect x="4.5" y="5" width="3" height="6" rx="0.5" fill={T.label1}/><rect x="9" y="2.5" width="3" height="8.5" rx="0.5" fill={T.label1}/><rect x="13.5" y="0" width="3" height="11" rx="0.5" fill={T.label1}/></svg>
          <svg width="24" height="11" viewBox="0 0 24 11"><rect x="0.5" y="0.5" width="20" height="10" rx="3" fill="none" stroke={T.label1} strokeOpacity="0.4"/><rect x="2" y="2" width="17" height="7" rx="1.6" fill={T.label1}/><rect x="21.5" y="3.5" width="1.5" height="4" rx="0.6" fill={T.label1} fillOpacity="0.4"/></svg>
        </div>
      </div>
      {/* content */}
      <div className="fn-screen" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {children}
      </div>
      {/* home indicator */}
      <div style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
        width: 124, height: 5, borderRadius: 100,
        background: T.dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.30)',
        zIndex: 60,
      }} />
    </div>
  );
}
window.FNPhone = FNPhone;
