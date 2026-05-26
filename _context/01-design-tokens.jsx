/* eslint-disable */
// ── Moose design tokens ───────────────────────────────────────
// Light/dark themes + brand palette. Driven by the Tweaks panel.

// Moose pairs two brand colors:
//   • Moose Pink (#EB4E8D)  — primary accent; CTAs, active states, credit ring.
//   • Moose Navy (#1A2B5F)  — brand surface; splash, hero, marketing, brand-mode chrome.
// `accent` exposes pink as the action color; `brand` exposes navy as a surface tool.
const FN_ACCENTS = {
  moose: {
    name: 'Moose',
    // Brand pink — same hex in light AND dark to keep brand fidelity.
    color:      '#EB4E8D',
    lightColor: '#EB4E8D',
    on:         '#fff',
    onLight:    '#fff',
    glow:       'rgba(235,78,141,0.32)',
    glowLight:  'rgba(235,78,141,0.16)',
    soft:       'rgba(235,78,141,0.18)',
    softLight:  'rgba(235,78,141,0.10)',
    // Brand navy — single canonical hex.
    brand:      '#1A2B5F',
    brandDeep:  '#13204A',
    brandLift:  '#2C3D78',
    onBrand:    '#FFFFFF',
    onBrandDim: 'rgba(255,255,255,0.65)',
  },
};
// Legacy alias — callers that still pass 'navy' get the Moose theme.
FN_ACCENTS.navy = FN_ACCENTS.moose;

function fnTheme(dark, accentKey) {
  const a = FN_ACCENTS[accentKey] || FN_ACCENTS.moose;
  return {
    accent:     dark ? a.color : (a.lightColor || a.color),
    onAccent:   dark ? a.on : (a.onLight || a.on),
    accentGlow: dark ? a.glow : (a.glowLight || a.glow),
    accentSoft: dark ? (a.soft || a.glow) : (a.softLight || a.glowLight),

    // Brand surface tokens — navy. Use for splash, hero, brand-mode chrome.
    brand:      a.brand      || '#1A2B5F',
    brandDeep:  a.brandDeep  || '#13204A',
    brandLift:  a.brandLift  || '#2C3D78',
    onBrand:    a.onBrand    || '#FFFFFF',
    onBrandDim: a.onBrandDim || 'rgba(255,255,255,0.65)',

    // Backgrounds (iOS system colors, light/dark)
    bg:        dark ? '#000000' : '#F2F2F7',
    surface:   dark ? '#1C1C1E' : '#FFFFFF',
    surface2:  dark ? '#2C2C2E' : '#F8F8F8',
    surfaceTint: dark ? '#3A3A3C' : '#E9E9EE',

    // Labels
    label1: dark ? '#FFFFFF' : '#000000',
    label2: dark ? 'rgba(235,235,245,0.60)' : 'rgba(60,60,67,0.60)',
    label3: dark ? 'rgba(235,235,245,0.30)' : 'rgba(60,60,67,0.30)',
    label4: dark ? 'rgba(235,235,245,0.18)' : 'rgba(60,60,67,0.18)',
    sep:    dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)',

    // Semantic
    success: '#34C759',
    warn:    '#FF9F0A',
    danger:  '#FF3B30',
    peak:    dark ? '#FFD60A' : '#FF9500',

    dark,
    accentName: a.name,
  };
}

// ── Tiny SF-style icon set (stroke 2, 24×24 unless noted) ─────
function FNIcon({ name, size = 22, color = 'currentColor', stroke = 1.8 }) {
  const p = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (name) {
    case 'home':       return <svg {...p}><path d="M3 11l9-8 9 8v9a2 2 0 01-2 2h-3v-7h-8v7H5a2 2 0 01-2-2v-9z"/></svg>;
    case 'calendar':   return <svg {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
    case 'list':       return <svg {...p}><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1.2" fill={color}/><circle cx="3.5" cy="12" r="1.2" fill={color}/><circle cx="3.5" cy="18" r="1.2" fill={color}/></svg>;
    case 'user':       return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>;
    case 'bolt':       return <svg {...p} fill={color} stroke="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>;
    case 'bolt-stroke':return <svg {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>;
    case 'chevR':      return <svg {...p}><path d="M9 6l6 6-6 6"/></svg>;
    case 'chevL':      return <svg {...p}><path d="M15 6l-6 6 6 6"/></svg>;
    case 'chevD':      return <svg {...p}><path d="M6 9l6 6 6-6"/></svg>;
    case 'chevU':      return <svg {...p}><path d="M6 15l6-6 6 6"/></svg>;
    case 'plus':       return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case 'check':      return <svg {...p}><path d="M5 12l5 5 9-11"/></svg>;
    case 'x':          return <svg {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'clock':      return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'pin':        return <svg {...p}><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case 'filter':     return <svg {...p}><path d="M4 5h16M7 12h10M10 19h4"/></svg>;
    case 'search':     return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>;
    case 'bell':       return <svg {...p}><path d="M6 16V11a6 6 0 1112 0v5l1.5 2h-15L6 16z"/><path d="M10 21h4"/></svg>;
    case 'lock':       return <svg {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 118 0v4"/></svg>;
    case 'shield':     return <svg {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>;
    case 'help':       return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 015 0c0 1.7-2.5 2-2.5 4M12 17.3v.01"/></svg>;
    case 'edit':       return <svg {...p}><path d="M16 4l4 4-11 11H5v-4L16 4z"/></svg>;
    case 'logout':     return <svg {...p}><path d="M14 4h4a2 2 0 012 2v12a2 2 0 01-2 2h-4M10 17l-5-5 5-5M5 12h12"/></svg>;
    case 'mail':       return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case 'phone':      return <svg {...p}><path d="M22 16.9V20a2 2 0 01-2.2 2 19 19 0 01-8.3-3 19 19 0 01-6-6A19 19 0 012.5 4.7 2 2 0 014.5 2.5h3a1 1 0 011 .8c.1.9.3 1.8.6 2.7a1 1 0 01-.2 1L7.5 8.4a16 16 0 006 6L15 13a1 1 0 011-.2c.9.3 1.8.5 2.7.6.5.1.8.5.8 1z"/></svg>;
    case 'mfa':        return <svg {...p}><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M11 18h2"/></svg>;
    case 'card':       return <svg {...p}><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 11h18"/></svg>;
    case 'arrow-r':    return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'arrow-l':    return <svg {...p}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>;
    case 'star':       return <svg {...p} fill={color} stroke="none"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>;
    case 'sparkle':    return <svg {...p}><path d="M12 4v6M12 14v6M4 12h6M14 12h6"/></svg>;
    case 'flag':       return <svg {...p}><path d="M5 21V5M5 5h12l-2 4 2 4H5"/></svg>;
    // ── modality glyphs ───────────────────────────────────────
    case 'mod-yoga':   return <svg {...p}><circle cx="12" cy="6" r="2"/><path d="M12 8v3M5 20c1-3 4-5 7-5s6 2 7 5M5 20c2-1 4-1.6 7-1.6S17 19 19 20M9 14l-4 6M15 14l4 6"/></svg>;
    case 'mod-pilates':return <svg {...p}><rect x="3" y="9" width="18" height="6" rx="1.5"/><path d="M3 12h-1M22 12h1M7 9V7M17 9V7"/><path d="M9 12h6"/></svg>;
    case 'mod-boxing': return <svg {...p}><path d="M7 4h7a3 3 0 013 3v3l2 2v6a3 3 0 01-3 3H8a3 3 0 01-3-3V8a4 4 0 012-3.5z"/><path d="M14 11h-4"/></svg>;
    case 'mod-hiit':   return <svg {...p}><circle cx="12" cy="13" r="8"/><path d="M9 2h6M12 13l3-3M12 5v2"/></svg>;
    case 'mod-cycle':  return <svg {...p}><circle cx="5.5" cy="17" r="3.5"/><circle cx="18.5" cy="17" r="3.5"/><path d="M5.5 17l5-7h4l4 7M10.5 10l-1-3h-2M14.5 10l1-2"/></svg>;
    case 'mod-barre':  return <svg {...p}><path d="M3 7h18M5 5v8M19 5v8M9 13l-2 8M15 13l2 8M9 13h6M11 13l-1 4h4l-1-4"/></svg>;
    case 'mod-row':    return <svg {...p}><path d="M3 17l4-2 5 2 5-2 4 2M5 11l3-1.5 8 4 3-1.5"/><circle cx="14" cy="6" r="2"/></svg>;
    default: return null;
  }
}

window.FN_ACCENTS = FN_ACCENTS;
window.fnTheme = fnTheme;
window.FNIcon = FNIcon;

// ── MooseMark — the brand glyph (pink M) ───────────────────────
// Pass `size` to scale, `color` to recolor (default Moose Pink).
// Stroke-based so it scales crisply and rounds at peaks/valley.
function MooseMark({ size = 64, color = '#EB4E8D', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-label="Moose">
      <path
        d="M 17 81 L 17 28 L 50 58 L 83 28 L 83 81"
        fill="none"
        stroke={color}
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
window.MooseMark = MooseMark;

// ── MooseLogo — Moose M inside a navy squircle tile (app-icon recipe) ──
function MooseLogo({ size = 76, radius, glyphSize, bg, fg, style = {} }) {
  const r = radius ?? Math.round(size * 0.22);
  const g = glyphSize ?? Math.round(size * 0.66);
  return (
    <div style={{
      width: size, height: size, borderRadius: r,
      background: bg || '#1A2B5F',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      ...style,
    }}>
      <MooseMark size={g} color={fg || '#EB4E8D'} />
    </div>
  );
}
window.MooseLogo = MooseLogo;
