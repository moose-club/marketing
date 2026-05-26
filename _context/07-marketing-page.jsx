/* eslint-disable */
// ── Moose — Public marketing site (B2B / studio operators) ─────
// Single-page site. Showcases the member app to studio owners.
// Visual references the user supplied: umanodesign.studio (editorial
// typography), bevel.health (clean phone showcase), cash.app/new
// (bold, confident colour blocks).
//
// Stays inside the Moose system: SF font stack, Pink (#EB4E8D) +
// Navy (#1A2B5F) as the only brand colours, off-white #F0EEE9 as
// the page paper.

function MSitePage() {
  const T = fnTheme(false, 'navy'); // light, navy brand variant for phone screens

  // Site palette — explicit, so we never accidentally drift from the system.
  const C = {
    paper:   '#F0EEE9',
    ink:     '#0F0F12',
    inkDim:  'rgba(15,15,18,0.62)',
    rule:    'rgba(15,15,18,0.12)',
    navy:    '#1A2B5F',
    navyOn:  '#FFFFFF',
    navyDim: 'rgba(255,255,255,0.65)',
    navyRule:'rgba(255,255,255,0.14)',
    pink:    '#EB4E8D',
    pinkOn:  '#FFFFFF',
    card:    '#FFFFFF',
  };

  return (
    <div data-screen-label="Marketing Site" style={{
      width: 1280, minHeight: 800,
      background: C.paper, color: C.ink,
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased', letterSpacing: -0.01,
      margin: '0 auto', overflow: 'hidden',
    }}>
      <MSNav C={C} />
      <MSHero C={C} T={T} />
      <MSTicker C={C} />
      <MSOutcomes C={C} />
      <MSAppShowcase C={C} T={T} />
      <MSHowItWorks C={C} />
      <MSPricing C={C} />
      <MSNetwork C={C} />
      <MSQuote C={C} />
      <MSFAQ C={C} />
      <MSCTA C={C} />
      <MSFooter C={C} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Nav — pinned to top of page. Pink "Apply" CTA on the right
// keeps the conversion point visible from any section.
// ─────────────────────────────────────────────────────────────────
function MSNav({ C }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '24px 56px', borderBottom: `1px solid ${C.rule}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <MooseMark size={26} color={C.pink} />
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: -0.4 }}>Moose</span>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 13.5, color: C.inkDim, fontWeight: 500 }}>
          <span>For studios</span>
          <span>How it works</span>
          <span>Pricing</span>
          <span>Network</span>
          <span>About</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <span style={{ fontSize: 13.5, color: C.inkDim, fontWeight: 500 }}>Member sign in</span>
        <button style={{
          background: C.pink, color: C.pinkOn, border: 'none',
          padding: '10px 18px', borderRadius: 999,
          fontSize: 13.5, fontWeight: 600, letterSpacing: -0.1,
          cursor: 'pointer', font: 'inherit',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          Apply to join
          <FNIcon name="arrow-r" size={13} color={C.pinkOn} stroke={2.4} />
        </button>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// Hero — Navy full-bleed. Oversized cream headline with one pink
// word ("network"). Phone on the right shows the live member feed
// so studios see what their crossover members would see.
// ─────────────────────────────────────────────────────────────────
function MSHero({ C, T }) {
  return (
    <div style={{
      background: C.navy, color: C.navyOn, position: 'relative', overflow: 'hidden',
    }}>
      {/* faint navy noise/gradient — keeps it from reading flat */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(900px 540px at 18% 30%, rgba(235,78,141,0.10), transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', display: 'grid',
        gridTemplateColumns: '1.05fr 420px', gap: 56, alignItems: 'center',
        padding: '120px 56px 80px',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 12px 6px 8px', borderRadius: 999,
            background: 'rgba(255,255,255,0.06)',
            border: `1px solid ${C.navyRule}`,
            fontSize: 12, fontWeight: 600, color: C.navyOn,
            letterSpacing: -0.05,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: C.pink, boxShadow: `0 0 0 4px rgba(235,78,141,0.20)` }} />
            For studio operators · Now live in SYD / MEL / BNE
          </div>

          <h1 style={{
            fontSize: 92, lineHeight: 0.98, letterSpacing: -3.2,
            fontWeight: 700, margin: '28px 0 0', color: C.navyOn,
          }}>
            Your studio,<br />
            <span style={{ color: C.pink }}>plus 200&nbsp;others.</span>
          </h1>

          <p style={{
            fontSize: 19, lineHeight: 1.5, color: C.navyDim,
            maxWidth: 540, marginTop: 28, fontWeight: 400,
          }}>
            Moose is the crossover access pass that fills your empty
            slots, keeps your members loyal, and pays you per visit.
            One integration. Zero new admin.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <button style={{
              background: C.pink, color: C.pinkOn, border: 'none',
              padding: '15px 22px', borderRadius: 14,
              fontSize: 15, fontWeight: 600, cursor: 'pointer', font: 'inherit',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              Apply to join the network
              <FNIcon name="arrow-r" size={15} color={C.pinkOn} stroke={2.4} />
            </button>
            <button style={{
              background: 'transparent', color: C.navyOn,
              border: `1px solid ${C.navyRule}`,
              padding: '15px 22px', borderRadius: 14,
              fontSize: 15, fontWeight: 600, cursor: 'pointer', font: 'inherit',
            }}>
              See partner economics
            </button>
          </div>

          {/* Trust micro-row */}
          <div style={{
            marginTop: 60, display: 'flex', alignItems: 'center', gap: 24,
            fontSize: 12, color: C.navyDim, fontWeight: 500,
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <FNIcon name="check" size={13} color={C.pink} stroke={2.4} /> No discounting
            </span>
            <span style={{ width: 3, height: 3, borderRadius: 2, background: C.navyRule }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <FNIcon name="check" size={13} color={C.pink} stroke={2.4} /> Weekly cash payouts
            </span>
            <span style={{ width: 3, height: 3, borderRadius: 2, background: C.navyRule }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <FNIcon name="check" size={13} color={C.pink} stroke={2.4} /> 9-day onboarding
            </span>
          </div>
        </div>

        {/* Hero phone */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          transform: 'translateY(8px) rotate(-1.2deg)',
        }}>
          <div style={{ transform: 'scale(0.95)', transformOrigin: 'center' }}>
            <FNPhone T={T}>
              <ScreenHome T={T} />
              <FNTabBar T={T} active="home" />
            </FNPhone>
          </div>
        </div>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// Ticker — thin live-status bar between hero and the page body.
// Reads as a stock-ticker / "network is alive" cue.
// ─────────────────────────────────────────────────────────────────
function MSTicker({ C }) {
  const items = [
    'LIVE NETWORK',
    'SYD · MEL · BNE',
    '218 PARTNER STUDIOS',
    '14,802 CROSSOVER BOOKINGS THIS WEEK',
    'AVG PAYOUT $1,840 / WEEK',
    'PERTH Q3 2026',
  ];
  return (
    <div style={{
      background: '#13204A', color: '#fff',
      padding: '12px 56px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: 11, fontWeight: 700, letterSpacing: 1.4,
      fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
    }}>
      {items.map((s, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          {i === 0 && <span style={{ width: 7, height: 7, borderRadius: 4, background: '#34C759', animation: 'mk-pulse 1.6s ease-in-out infinite' }} />}
          {s}
        </span>
      ))}
      <style>{`@keyframes mk-pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.35 } }`}</style>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// Outcomes — Apple-style numbers strip. Each tabular number gets
// breathing room. Hairline rule between cells, no boxes.
// ─────────────────────────────────────────────────────────────────
function MSOutcomes({ C }) {
  const items = [
    { n: '32%',   l: 'avg uplift in off-peak fill rate' },
    { n: '94%',   l: 'partner retention after 12 months' },
    { n: '$2.3M', l: 'paid to partner studios in 2025' },
    { n: '218',   l: 'live partner studios across AU' },
  ];
  return (
    <div style={{ padding: '96px 56px 88px' }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: C.inkDim,
        textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 28,
      }}>
        ━━ Outcomes
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        borderTop: `1px solid ${C.rule}`,
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            padding: '36px 28px 32px',
            borderRight: i < items.length - 1 ? `1px solid ${C.rule}` : 'none',
          }}>
            <div className="tnum" style={{
              fontSize: 64, fontWeight: 700, letterSpacing: -2.4,
              lineHeight: 1, color: C.ink,
            }}>{it.n}</div>
            <div style={{
              fontSize: 14, color: C.inkDim, marginTop: 14,
              maxWidth: 200, lineHeight: 1.4,
            }}>{it.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// App showcase — three phones side by side, each with a caption
// pointing to a specific value prop. This is the "see the product"
// section bevel.health does so well. Cream cards on cream paper,
// separated by hairline borders + tone shifts.
// ─────────────────────────────────────────────────────────────────
function MSAppShowcase({ C, T }) {
  const cards = [
    {
      eyebrow: '01 · Discovery',
      title: 'Members find you in their pocket.',
      body: 'Your studio sits next to every other partner in the network — same brand, same imagery, same tap target. No race-to-the-bottom marketplace.',
      phone: <><ScreenSchedule T={T} /><FNTabBar T={T} active="schedule" /></>,
      tint: '#F7F5F0',
    },
    {
      eyebrow: '02 · Booking',
      title: 'Two taps, paid on arrival.',
      body: 'Members spend credits, not cash. We pay you the dollar value of every redeemed credit, weekly, with no clawback if they show up.',
      phone: <><ScreenHome T={T} /><FNTabBar T={T} active="home" /></>,
      tint: '#EEF2EE',
    },
    {
      eyebrow: '03 · Retention',
      title: "Their loyalty stays with you.",
      body: "Crossover access is a feature OF their home membership — not a competitor to it. Members can only join Moose through a studio they already pay.",
      phone: <><ScreenSessionsPast T={T} /><FNTabBar T={T} active="sessions" /></>,
      tint: '#F0EDE8',
    },
  ];

  return (
    <div style={{
      background: '#FFFFFF', borderTop: `1px solid ${C.rule}`,
      borderBottom: `1px solid ${C.rule}`,
    }}>
      <div style={{ padding: '96px 56px 32px' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: C.inkDim,
          textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 28,
        }}>
          ━━ The member app, your way in
        </div>
        <div style={{
          fontSize: 56, fontWeight: 700, letterSpacing: -2,
          lineHeight: 1.02, maxWidth: 900,
        }}>
          Everything they need to discover you,
          {' '}
          <span style={{ color: C.inkDim }}>book you, and stay with you.</span>
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 0, borderTop: `1px solid ${C.rule}`,
      }}>
        {cards.map((c, i) => (
          <div key={i} style={{
            background: c.tint,
            padding: '48px 32px 28px',
            borderRight: i < cards.length - 1 ? `1px solid ${C.rule}` : 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'stretch',
          }}>
            <div style={{
              fontSize: 11, fontWeight: 700, color: C.inkDim,
              letterSpacing: 1.4, textTransform: 'uppercase',
            }}>{c.eyebrow}</div>
            <div style={{
              fontSize: 26, fontWeight: 700, letterSpacing: -0.8,
              lineHeight: 1.15, marginTop: 14, maxWidth: 320,
            }}>{c.title}</div>
            <p style={{
              fontSize: 14.5, color: C.inkDim, lineHeight: 1.55,
              marginTop: 14, maxWidth: 340,
            }}>{c.body}</p>

            <div style={{
              marginTop: 32, display: 'flex', justifyContent: 'center',
              transform: 'scale(0.78)', transformOrigin: 'center top',
              marginBottom: -100,
            }}>
              <FNPhone T={T}>{c.phone}</FNPhone>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// How it works — 4 numbered steps, umanodesign-style editorial. Big
// serif-like number, tight headline, description. Vertical hairline
// between steps for a typographic grid.
// ─────────────────────────────────────────────────────────────────
function MSHowItWorks({ C }) {
  const steps = [
    { n: '01', t: 'Apply',     d: 'Tell us where your studio fits — modality, location, capacity. We vet for quality, not quantity.' },
    { n: '02', t: 'Sync',      d: 'One-click integrations with Mindbody, Glofox, Xplor and Momence. Your existing schedule, untouched.' },
    { n: '03', t: 'Price',     d: 'You set the credit rate for each class type. Off-peak, on-peak, premium — your call. We never discount.' },
    { n: '04', t: 'Get paid',  d: 'Members book through Moose, you get paid weekly per attended class. Your members get the same access in return.' },
  ];

  return (
    <div style={{ padding: '120px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, marginBottom: 56 }}>
        <div>
          <div style={{
            fontSize: 11, fontWeight: 700, color: C.inkDim,
            textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 28,
          }}>
            ━━ How it works
          </div>
          <div style={{
            fontSize: 56, fontWeight: 700, letterSpacing: -2,
            lineHeight: 1.02,
          }}>
            Four steps. Nine business days, on average.
          </div>
        </div>
        <div style={{ alignSelf: 'flex-end', maxWidth: 460 }}>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: C.inkDim }}>
            We do the integration, the scheduling sync, and the partner
            communications. You stay focused on your space, your trainers,
            and your members.
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        borderTop: `1px solid ${C.rule}`,
      }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            padding: '36px 28px 0',
            borderRight: i < steps.length - 1 ? `1px solid ${C.rule}` : 'none',
            minHeight: 240,
          }}>
            <div className="tnum" style={{
              fontSize: 13, fontWeight: 600, color: C.pink, letterSpacing: -0.2,
            }}>{s.n}</div>
            <div style={{
              fontSize: 28, fontWeight: 700, letterSpacing: -1,
              marginTop: 36, lineHeight: 1.05,
            }}>{s.t}</div>
            <p style={{
              fontSize: 14, color: C.inkDim, lineHeight: 1.55,
              marginTop: 14, maxWidth: 240,
            }}>{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// Pricing — a single confident block. The lever for studio
// operators: "you set the rate, we just route". One outcome
// number, two columns of explanatory copy.
// ─────────────────────────────────────────────────────────────────
function MSPricing({ C }) {
  return (
    <div style={{
      background: C.navy, color: C.navyOn, padding: '120px 56px',
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: C.pink,
        textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 32,
      }}>
        ━━ Pricing
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'flex-end' }}>
        <div>
          <div style={{
            fontSize: 92, fontWeight: 700, letterSpacing: -3.2, lineHeight: 0.96,
            color: C.navyOn,
          }}>
            You set the price.<br />
            <span style={{ color: C.pink }}>We just route the booking.</span>
          </div>
        </div>
        <div style={{
          background: '#13204A', borderRadius: 24,
          padding: '36px 36px 32px',
          border: `1px solid ${C.navyRule}`,
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.pink, letterSpacing: 1.4, textTransform: 'uppercase' }}>Today's rate</div>
          <div className="tnum" style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2.4, color: C.navyOn, marginTop: 12, lineHeight: 1 }}>
            $14<span style={{ fontSize: 24, color: C.navyDim, fontWeight: 500 }}> AUD / credit</span>
          </div>
          <div style={{ fontSize: 13.5, color: C.navyDim, marginTop: 14, lineHeight: 1.5 }}>
            Reviewed quarterly against partner studios' published rack rates.
            Reformer at 1.5x · Yoga at 1.0x · Cycle at 0.75x — typical.
          </div>
        </div>
      </div>

      <div style={{
        marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32, borderTop: `1px solid ${C.navyRule}`, paddingTop: 36,
      }}>
        {[
          { t: 'No discounting, ever', d: 'You publish your rack rate in credits. Members pay full price every time — we just convert credits to cash for you.' },
          { t: 'Weekly payouts', d: 'Every Monday, prior week. No clawbacks if a member shows up. No minimums. Stripe-direct, no platform escrow.' },
          { t: 'No lock-in', d: '30 days written notice and we wind down outbound bookings. No exit fee. Your members keep access through their billing cycle.' },
        ].map((b, i) => (
          <div key={i}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: -0.3, color: C.navyOn }}>{b.t}</div>
            <p style={{ fontSize: 14, color: C.navyDim, marginTop: 10, lineHeight: 1.55, maxWidth: 320 }}>{b.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// Network — partner studio grid, generated tiles from MK_PARTNERS.
// Each tile reuses the in-app studio gradient + initial treatment
// so the marketing site shows the same studio art members see.
// ─────────────────────────────────────────────────────────────────
function MSNetwork({ C }) {
  const partners = window.MK.MK_PARTNERS.slice(0, 20);
  return (
    <div style={{ padding: '120px 56px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
        <div>
          <div style={{
            fontSize: 11, fontWeight: 700, color: C.inkDim,
            textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 28,
          }}>
            ━━ The network
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -2, lineHeight: 1.02, maxWidth: 720 }}>
            Independent operators. <span style={{ color: C.inkDim }}>One quiet network.</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 20, fontSize: 13, color: C.inkDim, fontWeight: 500 }}>
          <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><span style={{ width: 7, height: 7, borderRadius: 4, background: '#34C759' }} /> 218 live</span>
          <span>· 24 onboarding</span>
          <span>· 11 waitlisted</span>
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14,
      }}>
        {partners.map((p, i) => {
          const r = mkResolvePartner(p);
          const fg = '#fff';
          return (
            <div key={i} style={{
              aspectRatio: '4 / 5', borderRadius: 14, overflow: 'hidden',
              background: `linear-gradient(155deg, ${r.p1}, ${r.p2})`,
              position: 'relative', color: fg,
              padding: '14px 14px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.4, opacity: 0.78 }}>
                  {(r.short || r.name).toUpperCase()}
                </div>
                <div style={{ fontSize: 11, opacity: 0.65, marginTop: 2 }}>{r.city} · {r.sub}</div>
              </div>
              <div style={{
                fontSize: 88, fontWeight: 800, lineHeight: 1,
                color: 'rgba(255,255,255,0.12)', letterSpacing: -3,
                textAlign: 'right', marginTop: 12,
              }}>{r.initial || (r.short || r.name || '?')[0]}</div>
              <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.9 }}>{r.mod}</div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 28, padding: '14px 20px', borderRadius: 999,
        border: `1px solid ${C.rule}`, display: 'inline-flex', alignItems: 'center',
        gap: 8, fontSize: 13, color: C.inkDim, fontWeight: 500,
      }}>
        <FNIcon name="pin" size={13} color={C.inkDim} />
        Studios across Sydney, Melbourne and Brisbane · Perth Q3 2026
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// Quote — single big editorial pull-quote. Studio owner's words
// front and center. Pink underline accent only on the studio name.
// ─────────────────────────────────────────────────────────────────
function MSQuote({ C }) {
  const q = window.MK.MK_QUOTES[0];
  const studio = window.FN_STUDIOS[q.studio];
  return (
    <div style={{
      background: '#FFFFFF', borderTop: `1px solid ${C.rule}`,
      borderBottom: `1px solid ${C.rule}`,
      padding: '120px 56px',
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: C.inkDim,
        textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 36,
      }}>
        ━━ From a partner
      </div>
      <blockquote style={{
        fontSize: 56, fontWeight: 600, letterSpacing: -1.8, lineHeight: 1.15,
        margin: 0, maxWidth: 1080, color: C.ink,
      }}>
        &ldquo;{q.q}&rdquo;
      </blockquote>
      <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 12,
          background: `linear-gradient(135deg, ${studio.p1}, ${studio.p2})`,
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: 18, letterSpacing: -0.5,
        }}>{studio.initial}</div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: C.ink, letterSpacing: -0.2 }}>{q.name}</div>
          <div style={{ fontSize: 13, color: C.inkDim, marginTop: 2 }}>{q.role}</div>
        </div>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// FAQ — 7 questions, expanded list view. First two open by default
// to set the answer-cadence and keep the page rich without an
// interaction requirement.
// ─────────────────────────────────────────────────────────────────
function MSFAQ({ C }) {
  return (
    <div style={{ padding: '120px 56px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'flex-start' }}>
        <div style={{ position: 'sticky', top: 56 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: C.inkDim,
            textTransform: 'uppercase', letterSpacing: 2.4, marginBottom: 28,
          }}>
            ━━ Common questions
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1.5, lineHeight: 1.05 }}>
            What every operator asks before they sign.
          </div>
          <div style={{ fontSize: 14, color: C.inkDim, marginTop: 18, lineHeight: 1.55, maxWidth: 320 }}>
            Got something we haven't covered? Partnerships replies in under 4 hours, weekdays.
          </div>
          <button style={{
            marginTop: 18, background: 'transparent', color: C.ink,
            border: `1px solid ${C.ink}`, padding: '11px 18px', borderRadius: 999,
            fontSize: 13.5, fontWeight: 600, font: 'inherit', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            <FNIcon name="mail" size={14} color={C.ink} /> partners@moose.app
          </button>
        </div>
        <div style={{ borderTop: `1px solid ${C.rule}` }}>
          {window.MK.MK_FAQ.map((f, i) => (
            <FAQRow key={i} C={C} q={f.q} a={f.a} open={i < 2} />
          ))}
        </div>
      </div>
    </div>
  );
}
function FAQRow({ C, q, a, open }) {
  return (
    <div style={{ borderBottom: `1px solid ${C.rule}`, padding: '24px 0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <div style={{
          flex: 1, fontSize: 20, fontWeight: 600, letterSpacing: -0.4,
          color: C.ink, lineHeight: 1.3,
        }}>{q}</div>
        <div style={{
          width: 28, height: 28, borderRadius: 14,
          background: open ? C.ink : 'transparent',
          color: open ? '#fff' : C.ink,
          border: open ? 'none' : `1px solid ${C.rule}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <FNIcon name={open ? 'x' : 'plus'} size={14} color={open ? '#fff' : C.ink} stroke={2.2} />
        </div>
      </div>
      {open && (
        <p style={{
          fontSize: 15, color: C.inkDim, lineHeight: 1.6,
          marginTop: 12, maxWidth: 720,
        }}>{a}</p>
      )}
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// CTA — cash.app-style oversized colour block. Pink full-bleed,
// short demand, single button. The page rhythm climaxes here.
// ─────────────────────────────────────────────────────────────────
function MSCTA({ C }) {
  return (
    <div style={{
      background: C.pink, color: '#fff', position: 'relative',
      padding: '160px 56px 140px', overflow: 'hidden',
    }}>
      {/* Subtle radial light — keeps the slab from reading flat */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(700px 420px at 80% 30%, rgba(255,255,255,0.16), transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: 2.4,
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.78)', marginBottom: 28,
        }}>
          ━━ Now taking applications
        </div>
        <div style={{
          fontSize: 144, fontWeight: 700, letterSpacing: -5.2,
          lineHeight: 0.92, maxWidth: 1080, color: '#fff',
        }}>
          Run your studio.<br />
          <span style={{ color: C.navy }}>Let us run the network.</span>
        </div>
        <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 16 }}>
          <button style={{
            background: C.navy, color: '#fff', border: 'none',
            padding: '20px 28px', borderRadius: 16,
            fontSize: 17, fontWeight: 600, cursor: 'pointer', font: 'inherit',
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>
            Apply to join — 8 min
            <FNIcon name="arrow-r" size={16} color="#fff" stroke={2.4} />
          </button>
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)' }}>
            Or book a 20-min call with partnerships →
          </span>
        </div>
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────────────────────────
// Footer — quiet. Brand mark, link grid, fine print.
// ─────────────────────────────────────────────────────────────────
function MSFooter({ C }) {
  const cols = [
    { title: 'For studios', items: ['Apply to join', 'Pricing', 'Integrations', 'Partner FAQ'] },
    { title: 'For members', items: ['How Moose works', 'Find a studio', 'Member app', 'Member FAQ'] },
    { title: 'Company',     items: ['About', 'Press', 'Careers', 'Contact'] },
    { title: 'Legal',       items: ['Privacy', 'Terms', 'Partner agreement', 'Member agreement'] },
  ];
  return (
    <div style={{ background: '#0B1438', color: '#fff', padding: '80px 56px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 3fr', gap: 64 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <MooseMark size={32} color={C.pink} />
            <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.6 }}>Moose</span>
          </div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 14, lineHeight: 1.55, maxWidth: 280 }}>
            One pass. Every studio worth training at. Built in Sydney, for independent operators.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {cols.map((c, i) => (
            <div key={i}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: 1.2, textTransform: 'uppercase' }}>{c.title}</div>
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {c.items.map((it, j) => (
                  <span key={j} style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)' }}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        marginTop: 56, paddingTop: 24,
        borderTop: '1px solid rgba(255,255,255,0.12)',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 12, color: 'rgba(255,255,255,0.45)',
      }}>
        <span>© 2026 Moose Studio Network Pty Ltd</span>
        <span>ABN 14 802 318 209 · Surry Hills, Sydney</span>
      </div>
    </div>
  );
}

window.MSitePage = MSitePage;
