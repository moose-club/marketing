/* eslint-disable */
// ── Flex Network — Home / Dashboard + Sessions ────────────

// 2 · Home / Dashboard
function ScreenHome({ T }) {
  return (
    <div style={{ background: T.bg, height: '100%', position: 'relative', overflow: 'auto', paddingBottom: 100 }}>
      {/* Top greeting bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px 20px 0' }}>
        <div>
          <div style={{ fontSize: 12, color: T.label2, fontWeight: 500 }}>Tuesday · Mar 18</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: T.label1, letterSpacing: -0.4, marginTop: 2 }}>
            Ready to move, Alex?
          </div>
        </div>
        <button style={{ background: T.surface, border: 'none', width: 40, height: 40, borderRadius: 20, position: 'relative' }}>
          <FNIcon name="bell" size={20} color={T.label1} />
          <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderRadius: 4, background: T.accent, border: `1.5px solid ${T.surface}` }} />
        </button>
      </div>

      {/* Credits hero card */}
      <div style={{ margin: '20px 20px 0', padding: '20px 20px 18px', background: T.surface, borderRadius: 22, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -40, top: -40, width: 180, height: 180, borderRadius: '50%', background: T.accentGlow }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: T.label2, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.6 }}>Credits this month</div>
            <div className="tnum" style={{ fontSize: 44, fontWeight: 700, color: T.label1, letterSpacing: -2, lineHeight: 1, marginTop: 6 }}>
              3.83<span style={{ color: T.label2, fontSize: 19, fontWeight: 600, letterSpacing: -0.5 }}> / 6</span>
            </div>
            <div style={{ fontSize: 12, color: T.label2, marginTop: 8 }}>
              Refreshes <span style={{ color: T.label1, fontWeight: 600 }}>in 13 days</span> · Apr 1
            </div>
          </div>
          <div style={{ position: 'relative', width: 88, height: 88 }}>
            <svg width="88" height="88" viewBox="0 0 88 88">
              <circle cx="44" cy="44" r="38" fill="none" stroke={T.label4} strokeWidth="6"/>
              <circle cx="44" cy="44" r="38" fill="none" stroke={T.accent} strokeWidth="6"
                strokeDasharray={`${(3.83/6)*238.7} 238.7`} strokeLinecap="round" transform="rotate(-90 44 44)" />
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div className="tnum" style={{ fontSize: 13, fontWeight: 700, color: T.label1 }}>64%</div>
              <div style={{ fontSize: 9, color: T.label2, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.4 }}>used</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick action: schedule */}
      <div style={{ margin: '12px 20px 0', display: 'flex', gap: 10 }}>
        <button className="tap" style={{
          flex: 1, background: T.label1, color: T.bg, border: 'none', borderRadius: 16,
          padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          font: 'inherit', cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <FNIcon name="calendar" size={20} color={T.bg} />
            <span style={{ fontSize: 13.5, fontWeight: 600 }}>Browse classes</span>
          </div>
          <FNIcon name="arrow-r" size={18} color={T.bg} />
        </button>
      </div>

      {/* Upcoming */}
      <div style={{ margin: '24px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.label1, letterSpacing: -0.3 }}>Up next</div>
          <span style={{ fontSize: 12, color: T.accent, fontWeight: 600 }}>See all 4</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <UpcomingRow T={T} when="Today · 6:30 PM" studio="ironworks" cls="Boxing Conditioning" cost={1.5} status="booked" />
          <UpcomingRow T={T} when="Tomorrow · 7:00 AM" studio="pulse" cls="Reformer 60 — Power" cost={1} status="waitlist" pos={3} />
          <UpcomingRow T={T} when="Thu · 12:00 PM" studio="spincity" cls="Lunch Express" cost={0.75} status="booked" peak />
        </div>
      </div>
    </div>
  );
}

function UpcomingRow({ T, when, studio, cls, cost, status, pos, peak }) {
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
          {peak && <PeakBadge T={T} />}
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: T.label1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cls}</div>
        <div style={{ fontSize: 11, color: T.label2, marginTop: 1 }}>{s.short} · {cost} credit{cost!==1?'s':''}</div>
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

// 5 · Upcoming sessions full view
function ScreenSessions({ T }) {
  return (
    <div style={{ background: T.bg, height: '100%', position: 'relative', overflow: 'auto', paddingBottom: 100 }}>
      <FNTopBar T={T} />
      <div style={{ padding: '0 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, color: T.label1, letterSpacing: -0.6 }}>Sessions</div>
          <div style={{ fontSize: 13, color: T.label2, marginTop: 2 }}>You've got 4 sessions ahead</div>
        </div>
      </div>
      <div style={{ padding: '4px 20px 12px' }}>
        <div className="fn-seg">
          <button className="active" style={{ color: T.label1 }}>Upcoming · 4</button>
          <button style={{ color: T.label2 }}>Past</button>
        </div>
      </div>

      {/* This week section */}
      <SessionGroup T={T} title="This week" items={[
        { day: 'Tue', date: '18', when: '6:30 PM · 60 min', studio: 'ironworks', cls: 'Boxing Conditioning', status: 'booked', cost: 1.5 },
        { day: 'Wed', date: '19', when: '7:00 AM · 50 min', studio: 'pulse', cls: 'Reformer 60 — Power', status: 'waitlist', pos: 3, cost: 1 },
        { day: 'Thu', date: '20', when: '12:00 PM · 45 min', studio: 'spincity', cls: 'Lunch Express', status: 'booked', cost: 0.75, peak: true },
      ]} />

      <SessionGroup T={T} title="Next week" items={[
        { day: 'Mon', date: '24', when: '8:00 AM · 60 min', studio: 'forge', cls: 'HIIT 45', status: 'booked', cost: 1.5 },
      ]} />
    </div>
  );
}

function SessionGroup({ T, title, items }) {
  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ padding: '0 24px 8px', fontSize: 11, fontWeight: 700, color: T.label2, textTransform: 'uppercase', letterSpacing: 0.6 }}>{title}</div>
      <div style={{ background: T.surface, margin: '0 16px', borderRadius: 22, overflow: 'hidden' }}>
        {items.map((it, i) => {
          const s = FN_STUDIOS[it.studio];
          return (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 14px', alignItems: 'center', borderTop: i ? `0.5px solid ${T.sep}` : 'none' }}>
              <div style={{
                width: 48, height: 56, borderRadius: 10,
                background: `linear-gradient(180deg, ${s.p1}, ${s.p2})`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff',
                flexShrink: 0,
              }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.8, letterSpacing: 0.5 }}>{it.day.toUpperCase()}</div>
                <div className="tnum" style={{ fontSize: 18, fontWeight: 700, lineHeight: 1, marginTop: 1 }}>{it.date}</div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 2 }}>
                  <div style={{ fontSize: 11, color: T.label2, fontWeight: 500 }}>{it.when}</div>
                  {it.peak && <PeakBadge T={T} />}
                </div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: T.label1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.cls}</div>
                <div style={{ fontSize: 11, color: T.label2, marginTop: 1, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>{s.short}</span>
                  <span style={{ width: 3, height: 3, borderRadius: 2, background: T.label3 }} />
                  <span className="tnum">{it.cost} credit{it.cost!==1?'s':''}</span>
                  {it.status === 'waitlist' && (
                    <>
                      <span style={{ width: 3, height: 3, borderRadius: 2, background: T.label3 }} />
                      <span style={{ color: T.warn, fontWeight: 600 }}>#{it.pos} waitlist</span>
                    </>
                  )}
                </div>
              </div>
              <button style={{
                background: it.status === 'booked' ? T.surfaceTint : 'rgba(255,59,48,0.12)',
                color: it.status === 'booked' ? T.label1 : T.danger,
                border: 'none', padding: '8px 12px', borderRadius: 10,
                fontSize: 11, fontWeight: 600, cursor: 'pointer', font: 'inherit',
                flexShrink: 0,
              }}>{it.status === 'booked' ? 'Cancel' : 'Leave'}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 5B · Past sessions — history view
// Card states:
//   • attended   — green check, optional 1–5 star rating (or "Rate" prompt), rebook CTA
//   • noshow     — pink/danger forfeit chip, "Credit forfeited"
//   • cancelled  — neutral "Cancelled in time", refunded credit
function ScreenSessionsPast({ T }) {
  // ratings 0 = not yet rated
  return (
    <div style={{ background: T.bg, height: '100%', position: 'relative', overflow: 'auto', paddingBottom: 100 }}>
      <FNTopBar T={T} />
      <div style={{ padding: '0 20px 12px' }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: T.label1, letterSpacing: -0.6 }}>Sessions</div>
        <div style={{ fontSize: 13, color: T.label2, marginTop: 2 }}>32 classes · 4 studios this quarter</div>
      </div>
      <div style={{ padding: '4px 20px 12px' }}>
        <div className="fn-seg">
          <button style={{ color: T.label2 }}>Upcoming · 4</button>
          <button className="active" style={{ color: T.label1 }}>Past</button>
        </div>
      </div>

      {/* Quick stats strip — gives the tab a sense of place */}
      <div style={{
        margin: '4px 16px 16px', padding: '14px 16px',
        background: T.surface, borderRadius: 18,
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12,
      }}>
        {[
          { l: 'This month', v: '8', sub: 'classes' },
          { l: 'Avg rating', v: '4.6', sub: 'of 5' },
          { l: 'Favourite', v: 'Ironworks', sub: '11 visits' },
        ].map((s, i) => (
          <div key={i} style={{ borderLeft: i ? `0.5px solid ${T.sep}` : 'none', paddingLeft: i ? 12 : 0 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: T.label3, letterSpacing: 0.4, textTransform: 'uppercase' }}>{s.l}</div>
            <div className="tnum" style={{ fontSize: 18, fontWeight: 700, color: T.label1, letterSpacing: -0.4, marginTop: 3 }}>{s.v}</div>
            <div style={{ fontSize: 10.5, color: T.label2, marginTop: 1 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <PastSessionGroup T={T} title="This week" items={[
        { day: 'Mon', date: '17', when: '6:30 PM · 60 min', studio: 'ironworks', cls: 'Boxing Conditioning', coach: 'Sam K.', state: 'attended', rating: 5, cost: 1.5 },
        { day: 'Sun', date: '16', when: '9:00 AM · 75 min', studio: 'pulse',     cls: 'Reformer 75 — Flow',  coach: 'Lena M.', state: 'attended', rating: 0, cost: 1.5 },
      ]} />

      <PastSessionGroup T={T} title="Last week" items={[
        { day: 'Fri', date: '14', when: '7:00 AM · 45 min', studio: 'spincity', cls: 'Sunrise Ride',          coach: 'Jordan P.', state: 'attended', rating: 4, cost: 0.75, peak: false },
        { day: 'Wed', date: '12', when: '6:00 AM · 50 min', studio: 'forge',    cls: 'HIIT 45',               coach: 'Marc B.',   state: 'noshow',   cost: 1.5 },
        { day: 'Mon', date: '10', when: '5:30 PM · 60 min', studio: 'ironworks',cls: 'Strength Foundations',  coach: 'Sam K.',    state: 'cancelled',cost: 1.5 },
      ]} />
    </div>
  );
}

function PastSessionGroup({ T, title, items }) {
  return (
    <div style={{ marginTop: 4 }}>
      <div style={{ padding: '6px 24px 8px', fontSize: 11, fontWeight: 700, color: T.label2, textTransform: 'uppercase', letterSpacing: 0.6 }}>{title}</div>
      <div style={{ background: T.surface, margin: '0 16px 14px', borderRadius: 22, overflow: 'hidden' }}>
        {items.map((it, i) => <PastSessionCard key={i} T={T} it={it} divider={!!i} />)}
      </div>
    </div>
  );
}

// Single past-session card. Designed to share rhythm with the upcoming SessionGroup
// row but tells a *retrospective* story: result chip, rating, rebook CTA — no Cancel button.
function PastSessionCard({ T, it, divider }) {
  const s = FN_STUDIOS[it.studio];
  const attended = it.state === 'attended';
  const noshow = it.state === 'noshow';

  // Date tile: full color when attended, desaturated for non-attended states.
  const tileBg = attended
    ? `linear-gradient(180deg, ${s.p1}, ${s.p2})`
    : `linear-gradient(180deg, ${T.surfaceTint}, ${T.surface2 || T.surfaceTint})`;
  const tileFg = attended ? '#fff' : T.label2;

  return (
    <div style={{
      display: 'flex', gap: 12, padding: '14px 14px', alignItems: 'center',
      borderTop: divider ? `0.5px solid ${T.sep}` : 'none',
      opacity: attended ? 1 : 0.92,
    }}>
      {/* Date tile */}
      <div style={{
        width: 48, height: 56, borderRadius: 10, background: tileBg, color: tileFg,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, position: 'relative',
      }}>
        <div style={{ fontSize: 9, fontWeight: 700, opacity: attended ? 0.85 : 0.7, letterSpacing: 0.5 }}>{it.day.toUpperCase()}</div>
        <div className="tnum" style={{ fontSize: 18, fontWeight: 700, lineHeight: 1, marginTop: 1 }}>{it.date}</div>
        {attended && (
          <div style={{
            position: 'absolute', right: -4, bottom: -4,
            width: 18, height: 18, borderRadius: 9, background: T.success,
            border: `2px solid ${T.surface}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><FNIcon name="check" size={10} color="#fff" stroke={3.2} /></div>
        )}
      </div>

      {/* Body */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, color: T.label2, fontWeight: 500, marginBottom: 2 }}>{it.when}</div>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: T.label1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.cls}</div>
        <div style={{ fontSize: 11, color: T.label2, marginTop: 1, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>{s.short}</span>
          <span style={{ width: 3, height: 3, borderRadius: 2, background: T.label3 }} />
          <span>{it.coach}</span>
        </div>

        {/* State row: rating (attended) / forfeit chip (noshow) / refunded chip (cancelled) */}
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          {attended && (it.rating
            ? <Stars T={T} value={it.rating} />
            : (
              <button className="tap" style={{
                border: `1px dashed ${T.sep2 || T.sep}`, background: 'transparent',
                color: T.accent, fontSize: 11, fontWeight: 600,
                padding: '4px 10px', borderRadius: 999, cursor: 'pointer', font: 'inherit',
                display: 'inline-flex', alignItems: 'center', gap: 4,
              }}>
                <FNIcon name="star" size={11} color={T.accent} />
                <span>Rate this class</span>
              </button>
            )
          )}
          {noshow && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              background: 'rgba(255,59,48,0.12)', color: T.danger,
              fontSize: 10.5, fontWeight: 700, letterSpacing: 0.3, textTransform: 'uppercase',
              padding: '4px 8px', borderRadius: 6,
            }}>
              <FNIcon name="x" size={10} color={T.danger} stroke={2.5} />
              <span>No-show · <span className="tnum">{it.cost}</span> credit forfeited</span>
            </span>
          )}
          {it.state === 'cancelled' && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              background: T.surfaceTint, color: T.label2,
              fontSize: 10.5, fontWeight: 700, letterSpacing: 0.3, textTransform: 'uppercase',
              padding: '4px 8px', borderRadius: 6,
            }}>
              <FNIcon name="check" size={10} color={T.label2} stroke={2.5} />
              <span>Cancelled in time · refunded</span>
            </span>
          )}
        </div>
      </div>

      {/* Trailing action — rebook same class. The single most useful action on this card. */}
      <button className="tap" style={{
        background: T.surfaceTint, color: T.label1,
        border: 'none', padding: '8px 12px', borderRadius: 10,
        fontSize: 11, fontWeight: 600, cursor: 'pointer', font: 'inherit',
        display: 'inline-flex', alignItems: 'center', gap: 4,
        flexShrink: 0,
      }}>
        <FNIcon name="arrow-r" size={12} color={T.label1} stroke={2.2} />
        <span>Rebook</span>
      </button>
    </div>
  );
}

// Compact 5-star rating display. Filled = T.peak (warm), empty = T.label3 outline.
function Stars({ T, value = 0 }) {
  return (
    <div style={{ display: 'inline-flex', gap: 2 }} aria-label={`${value} of 5 stars`}>
      {[1,2,3,4,5].map(i => (
        <FNIcon key={i} name="star" size={12} color={i <= value ? T.peak : T.label3} />
      ))}
    </div>
  );
}

Object.assign(window, { ScreenHome, ScreenSessions, ScreenSessionsPast });
