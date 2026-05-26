/* eslint-disable */
// ── Flex Network — Schedule + Class detail + Booking confirm + Waitlist ──

// Sample classes for the schedule
const FN_CLASSES = [
  { id: 'c1', time: '6:00', ampm: 'AM', dur: 45, studio: 'forge', cls: 'Sunrise HIIT', spaces: 4, peak: false, locked: false },
  { id: 'c2', time: '7:00', ampm: 'AM', dur: 50, studio: 'pulse', cls: 'Reformer 60 — Power', spaces: 0, peak: true, locked: false, waitlist: false },
  { id: 'c3', time: '8:30', ampm: 'AM', dur: 60, studio: 'ironworks', cls: 'Boxing Conditioning', spaces: 8, peak: false },
  { id: 'c4', time: '12:00', ampm: 'PM', dur: 45, studio: 'spincity', cls: 'Lunch Express', spaces: 2, peak: true, locked: true, openIn: '2h 14m' },
  { id: 'c5', time: '5:30', ampm: 'PM', dur: 60, studio: 'barre9', cls: 'Barre Sculpt', spaces: 11, peak: false },
  { id: 'c6', time: '6:30', ampm: 'PM', dur: 60, studio: 'rowhouse', cls: 'Row & Strength', spaces: 6, peak: true },
];

// 3A · Schedule list
function ScreenSchedule({ T, initialBookingId = null, initialConfirmed = false }) {
  const [bookingId, setBookingId] = React.useState(initialBookingId);
  const booking = bookingId ? FN_CLASSES.find(c => c.id === bookingId) : null;
  return (
    <div style={{ background: T.bg, height: '100%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'auto', paddingBottom: 100 }}>
      <FNTopBar T={T} />
      <div style={{ padding: '0 20px 4px' }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: T.label1, letterSpacing: -0.6 }}>Schedule</div>
        <div style={{ fontSize: 13, color: T.label2, marginTop: 2 }}>Partner studios near you</div>
      </div>

      {/* Date strip */}
      <div style={{ padding: '12px 14px 8px', display: 'flex', gap: 6, overflow: 'auto' }}>
        {[
          {d:'Mon', n:'17'},{d:'Tue', n:'18', sel:true},{d:'Wed',n:'19'},{d:'Thu',n:'20'},
          {d:'Fri',n:'21'},{d:'Sat',n:'22'},{d:'Sun',n:'23'},
        ].map((d,i) => (
          <button key={i} className="tap" style={{
            border: 'none', cursor: 'pointer', flexShrink: 0, width: 46,
            padding: '8px 0', borderRadius: 14,
            background: d.sel ? T.label1 : T.surface,
            color: d.sel ? T.bg : T.label1,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            font: 'inherit',
          }}>
            <span style={{ fontSize: 10.5, fontWeight: 600, opacity: 0.7 }}>{d.d.toUpperCase()}</span>
            <span className="tnum" style={{ fontSize: 14.5, fontWeight: 700 }}>{d.n}</span>
          </button>
        ))}
      </div>

      {/* Filter row */}
      <div style={{ padding: '4px 16px 12px', display: 'flex', gap: 6, overflow: 'auto' }}>
        {[
          {l:'All studios', sel:true}, {l:'Boxing'}, {l:'Yoga'}, {l:'Reformer'}, {l:'Cycle'}, {l:'HIIT'},
        ].map((f,i) => (
          <button key={i} style={{
            border: 'none', cursor: 'pointer', flexShrink: 0,
            padding: '7px 14px', borderRadius: 999,
            background: f.sel ? T.label1 : T.surface,
            color: f.sel ? T.bg : T.label1,
            fontSize: 12, fontWeight: 600, font: 'inherit',
          }}>{f.l}</button>
        ))}
        <button style={{
          border: 'none', cursor: 'pointer', flexShrink: 0,
          width: 36, height: 36, borderRadius: 18,
          background: T.surface, color: T.label1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}><FNIcon name="filter" size={18} color={T.label1} /></button>
      </div>

      {/* Class list */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {FN_CLASSES.map(c => <ClassCard key={c.id} T={T} c={c} onBook={() => setBookingId(c.id)} />)}
      </div>
      </div>
      {booking && <BookingConfirmSheet T={T} c={booking} initiallyConfirmed={initialConfirmed} onDismiss={() => setBookingId(null)} />}
    </div>
  );
}

function ClassCard({ T, c, onBook }) {
  const s = FN_STUDIOS[c.studio];
  const cost = fnCost(c.studio);
  const isWaitlist = c.spaces === 0;
  return (
    <div style={{
      background: T.surface, borderRadius: 20, padding: 12,
      display: 'flex', gap: 12,
      border: c.peak ? `1px solid ${T.dark ? 'rgba(255,214,10,0.25)' : 'rgba(255,149,0,0.18)'}` : 'none',
    }}>
      <StudioPhoto studio={c.studio} height={92} radius={14} style={{ width: 92, flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span className="tnum" style={{ fontSize: 15, fontWeight: 700, color: T.label1, letterSpacing: -0.4 }}>
            {c.time}<span style={{ fontSize: 10.5, marginLeft: 2, color: T.label2 }}>{c.ampm}</span>
          </span>
          <span style={{ fontSize: 11, color: T.label2 }}>· {c.dur} min</span>
          {c.peak && (c.locked ? <PeakBadge T={T} countdown={`Opens ${c.openIn}`} /> : <PeakBadge T={T} />)}
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: T.label1, marginTop: 3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {c.cls}
        </div>
        <div style={{ fontSize: 11, color: T.label2, marginTop: 1, display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.short} · {s.mod}</span>
        </div>
        <div style={{ marginTop: 'auto', paddingTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="tnum" style={{ fontSize: 11, color: T.label2 }}>
            <span style={{ color: T.label1, fontWeight: 700, fontSize: 12 }}>{cost}</span> credit{cost!==1?'s':''}
            {!c.locked && c.spaces > 0 && <span style={{ marginLeft: 6 }}>· {c.spaces} left</span>}
            {!c.locked && c.spaces === 0 && <span style={{ marginLeft: 6, color: T.warn, fontWeight: 600 }}>· Full</span>}
          </div>
          <button className="tap" onClick={c.locked ? undefined : onBook} style={{
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

// 3B · Class detail (fullscreen)
function ScreenClassDetail({ T }) {
  const studio = 'ironworks';
  const s = FN_STUDIOS[studio];
  const cost = fnCost(studio);
  return (
    <div style={{ background: T.bg, height: '100%', position: 'relative', overflow: 'auto' }}>
      {/* Hero */}
      <StudioPhoto studio={studio} height={300} radius={0} style={{ width: '100%' }}>
        <div style={{ position: 'absolute', top: 56, left: 16, display: 'flex', gap: 8 }}>
          <button style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(20px)', border: 'none', width: 36, height: 36, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FNIcon name="chevL" size={18} color="#fff" />
          </button>
        </div>
        <div style={{ position: 'absolute', bottom: 18, left: 18, right: 18, color: '#fff' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
            <PeakBadge T={T} />
            <span style={{ fontSize: 11, fontWeight: 600, opacity: 0.85 }}>Tue · Mar 18 · 6:30 PM</span>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.6, lineHeight: 1.1 }}>Boxing Conditioning</div>
          <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>{s.name} · 60 min · Coach Devon</div>
        </div>
      </StudioPhoto>

      {/* Stats row */}
      <div style={{ margin: '16px 16px 0', background: T.surface, borderRadius: 18, padding: 4, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {[
          { l: 'Cost', v: <><span className="tnum">{cost}</span> credits</> },
          { l: 'Spaces', v: '8 left' },
          { l: 'Intensity', v: '4 / 5' },
        ].map((m, i) => (
          <div key={i} style={{ padding: '12px 8px', textAlign: 'center', borderRight: i < 2 ? `0.5px solid ${T.sep}` : 'none' }}>
            <div style={{ fontSize: 10.5, color: T.label2, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.4 }}>{m.l}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: T.label1, marginTop: 4 }}>{m.v}</div>
          </div>
        ))}
      </div>

      {/* About */}
      <div style={{ padding: '20px 20px 8px' }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: T.label1, marginBottom: 8 }}>About this class</div>
        <div style={{ fontSize: 13, color: T.label2, lineHeight: 1.5 }}>
          High-output boxing intervals on the heavy bag, broken up with bodyweight conditioning. Wraps recommended; gloves provided. Beginners welcome.
        </div>
      </div>

      {/* Studio profile peek */}
      <div style={{ padding: '12px 16px 0' }}>
        <div style={{ background: T.surface, borderRadius: 18, padding: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: `linear-gradient(135deg, ${s.p1}, ${s.p2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>{s.initial}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.label1 }}>{s.name}</div>
            <div style={{ fontSize: 11, color: T.label2, marginTop: 1, display: 'flex', alignItems: 'center', gap: 4 }}>
              <FNIcon name="pin" size={12} color={T.label2} stroke={2} />
              0.4 mi · Mission District
            </div>
          </div>
          <FNIcon name="chevR" size={18} color={T.label3} />
        </div>
      </div>

      {/* Cancellation policy */}
      <div style={{ padding: '12px 20px 120px', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
        <FNIcon name="clock" size={14} color={T.label2} />
        <div style={{ fontSize: 11, color: T.label2, lineHeight: 1.4 }}>
          Free cancellation up to <span style={{ color: T.label1, fontWeight: 600 }}>4 hours</span> before class. Late cancels forfeit the credit.
        </div>
      </div>

      {/* Sticky CTA */}
      <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
        <LiquidGlass T={T} radius={20} intensity={1.1}>
          <div style={{ padding: '10px 10px' }}>
            <FNButton T={T} trailing={
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, opacity: 0.85 }}>
                <span className="tnum">{cost}</span> cr
              </span>
            }>Book class</FNButton>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
}

// 3C · Booking confirmation
function ScreenBookingConfirm({ T }) {
  const studio = 'ironworks';
  const s = FN_STUDIOS[studio];
  return (
    <div style={{ background: T.bg, height: '100%', position: 'relative' }}>
      {/* Hero — green confirm bg */}
      <div style={{ height: 280, background: `linear-gradient(180deg, ${T.success}, #1f6b3a)`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -55%)', width: 96, height: 96, borderRadius: 48, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: 36, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FNIcon name="check" size={36} color={T.success} stroke={3} />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 0, right: 0, textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: -0.4 }}>You're booked!</div>
          <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>See you Tuesday at 6:30 PM</div>
        </div>
      </div>

      {/* Sheet */}
      <div className="fn-sheet" style={{ position: 'absolute', left: 0, right: 0, top: 256, bottom: 0, padding: '24px 20px', background: T.bg }}>
        <div style={{ background: T.surface, borderRadius: 18, padding: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: 12, background: `linear-gradient(135deg, ${s.p1}, ${s.p2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{s.initial}</div>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: T.label1 }}>Boxing Conditioning</div>
            <div style={{ fontSize: 11, color: T.label2, marginTop: 2 }}>{s.short} · Tue Mar 18 · 6:30 PM</div>
          </div>
        </div>

        <div style={{ background: T.surface, borderRadius: 18, padding: 14, marginTop: 10 }}>
          {[
            { l: 'Cost', r: '1.5 credits' },
            { l: 'Remaining after', r: '2.33 / 6' },
            { l: 'Cancel by', r: 'Tue 2:30 PM' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: i ? `0.5px solid ${T.sep}` : 'none' }}>
              <span style={{ fontSize: 13, color: T.label2 }}>{row.l}</span>
              <span className="tnum" style={{ fontSize: 13, color: T.label1, fontWeight: 600 }}>{row.r}</span>
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', left: 20, right: 20, bottom: 50, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <FNButton T={T} kind="secondary" leading={<FNIcon name="calendar" size={18} color={T.label1} />}>Add to calendar</FNButton>
          <FNButton T={T}>Done</FNButton>
        </div>
      </div>
    </div>
  );
}

// 4 · Waitlist promotion notification (in-app)
function ScreenWaitlistPromoted({ T }) {
  const studio = 'pulse';
  const s = FN_STUDIOS[studio];
  return (
    <div style={{ background: T.bg, height: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Dimmed background — Sessions screen ghost */}
      <div style={{ filter: 'blur(8px) brightness(0.6)', height: '100%' }}>
        <ScreenSessions T={T} />
      </div>

      {/* Banner notification (top) */}
      <LiquidGlass T={T} radius={18} intensity={1.2} style={{
        position: 'absolute', top: 64, left: 12, right: 12,
        boxShadow: '0 18px 40px rgba(0,0,0,0.30)',
      }}><div style={{ padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>
        <div style={{ width: 36, height: 36, borderRadius: 9, background: T.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <FNIcon name="bolt" size={20} color={T.onAccent} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: T.label1 }}>Moose · now</div>
          <div style={{ fontSize: 12, color: T.label1, marginTop: 1 }}>You're in! A spot just opened in <strong>Reformer 60 — Power</strong>.</div>
        </div>
      </div></LiquidGlass>

      {/* Bottom sheet */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: T.surface, borderRadius: '28px 28px 0 0',
        padding: '20px 20px 50px',
        boxShadow: '0 -10px 40px rgba(0,0,0,0.25)',
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: T.label3, margin: '0 auto 14px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: `linear-gradient(135deg, ${s.p1}, ${s.p2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18 }}>{s.initial}</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.success, letterSpacing: 0.4, textTransform: 'uppercase' }}>Promoted from waitlist</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: T.label1, marginTop: 2 }}>Reformer 60 — Power</div>
            <div style={{ fontSize: 11, color: T.label2, marginTop: 1 }}>Wed Mar 19 · 7:00 AM · {s.short}</div>
          </div>
        </div>
        <div style={{ background: T.surface2, borderRadius: 14, padding: 12, fontSize: 11, color: T.label2, lineHeight: 1.5, marginBottom: 14 }}>
          1 credit was deducted. Cancel free until <span style={{ color: T.label1, fontWeight: 600 }}>Tue 11:00 PM</span>. We also sent confirmation to your email + phone.
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1 }}><FNButton T={T} kind="secondary">Can't make it</FNButton></div>
          <div style={{ flex: 2 }}><FNButton T={T}>Got it</FNButton></div>
        </div>
      </div>
    </div>
  );
}

// 3A′ · Booking confirmation bottom sheet
//   Shown when the user taps "Book" on a class in the schedule.
//   This is the *confirm step* (review + commit) — distinct from ScreenBookingConfirm
//   (3C) which is the post-confirmation success screen.
function BookingConfirmSheet({ T, c, onDismiss, onConfirm, initiallyConfirmed = false }) {
  const s = FN_STUDIOS[c.studio];
  const cost = fnCost(c.studio);
  const [confirmed, setConfirmed] = React.useState(initiallyConfirmed);

  // Day label for the cancel-by line — same logic the design uses elsewhere:
  // free until 4h before class start.
  const cancelBy = (() => {
    const [h, m] = c.time.split(':').map(Number);
    let mins = h * 60 + (m || 0) + (c.ampm === 'PM' && h !== 12 ? 12 * 60 : 0) - 4 * 60;
    const ap = mins >= 12 * 60 ? 'PM' : 'AM';
    let hh = Math.floor(mins / 60) % 12; if (hh === 0) hh = 12;
    const mm = ('0' + (mins % 60)).slice(-2);
    return `Tue · ${hh}:${mm} ${ap}`;
  })();

  // Esc key dismisses
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onDismiss && onDismiss(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDismiss]);

  const handleConfirm = () => {
    setConfirmed(true);
    onConfirm && onConfirm(c);
  };

  return (
    <>
      {/* Scrim */}
      <div
        onClick={onDismiss}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(2px)',
          animation: 'fn-fade-in 180ms ease-out both',
          zIndex: 50,
        }}
      />

      {/* Sheet */}
      <div
        role="dialog"
        aria-label="Confirm booking"
        style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          background: T.bg,
          borderRadius: '24px 24px 0 0',
          padding: '8px 18px 34px',
          boxShadow: '0 -16px 50px rgba(0,0,0,0.32)',
          animation: 'fn-sheet-up 280ms cubic-bezier(0.22, 0.85, 0.3, 1) both',
          zIndex: 51,
        }}
      >
        {/* Drag handle */}
        <div style={{
          width: 38, height: 4, borderRadius: 2,
          background: T.label3, margin: '6px auto 14px',
        }} />

        {confirmed ? (
          <BookingSheetSuccess T={T} c={c} s={s} cost={cost} cancelBy={cancelBy} onDone={onDismiss} />
        ) : (
          <>
            {/* Title row */}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: T.label1, letterSpacing: -0.4 }}>Confirm booking</div>
              <button
                onClick={onDismiss}
                aria-label="Close"
                style={{
                  background: T.surfaceTint, border: 'none', cursor: 'pointer',
                  width: 28, height: 28, borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              ><FNIcon name="x" size={14} color={T.label1} stroke={2.2} /></button>
            </div>

            {/* Class card */}
            <div style={{ background: T.surface, borderRadius: 18, padding: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
              <StudioPhoto studio={c.studio} height={64} radius={12} style={{ width: 64, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                  <span className="tnum" style={{ fontSize: 13.5, fontWeight: 700, color: T.label1, letterSpacing: -0.3 }}>
                    {c.time}<span style={{ fontSize: 10, marginLeft: 2, color: T.label2 }}>{c.ampm}</span>
                  </span>
                  <span style={{ fontSize: 11, color: T.label2 }}>· Tue Mar 18 · {c.dur} min</span>
                  {c.peak && <PeakBadge T={T} />}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.label1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.cls}</div>
                <div style={{ fontSize: 11, color: T.label2, marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name} · {s.mod}</div>
              </div>
            </div>

            {/* Cost breakdown */}
            <div style={{ background: T.surface, borderRadius: 18, padding: '4px 14px', marginTop: 10 }}>
              {[
                { l: 'Class cost', r: <><span className="tnum">{cost}</span> credit{cost !== 1 ? 's' : ''}</> },
                { l: 'Balance after', r: <span className="tnum">{(3.83 - cost).toFixed(2)} / 6</span> },
                { l: 'Free cancel until', r: cancelBy },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 0',
                  borderTop: i ? `0.5px solid ${T.sep}` : 'none',
                }}>
                  <span style={{ fontSize: 13, color: T.label2 }}>{row.l}</span>
                  <span style={{ fontSize: 13, color: T.label1, fontWeight: 600 }}>{row.r}</span>
                </div>
              ))}
            </div>

            {/* Fine print */}
            <div style={{ display: 'flex', gap: 6, alignItems: 'flex-start', padding: '12px 4px 16px', fontSize: 11, color: T.label2, lineHeight: 1.45 }}>
              <FNIcon name="clock" size={12} color={T.label2} />
              <span>Late cancels (after {cancelBy}) forfeit the credit.</span>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ flex: 1 }}>
                <FNButton T={T} kind="secondary" onClick={onDismiss}>Cancel</FNButton>
              </div>
              <div style={{ flex: 1.4 }}>
                <FNButton
                  T={T}
                  onClick={handleConfirm}
                  trailing={<span className="tnum" style={{ opacity: 0.85, fontSize: 13, fontWeight: 600 }}>{cost} cr</span>}
                >Confirm</FNButton>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Keyframes scoped to this sheet — safe to include each time */}
      <style>{`
        @keyframes fn-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fn-sheet-up {
          from { transform: translateY(100%); opacity: 0.6; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
}

// Inline success state inside the sheet — feels lighter than a full-screen takeover.
function BookingSheetSuccess({ T, c, s, cost, cancelBy, onDone }) {
  const before = 3.83;
  const after = +(before - cost).toFixed(2);
  return (
    <div style={{ padding: '4px 2px 0', animation: 'fn-fade-in 220ms ease-out both' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 22, background: T.success,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}><FNIcon name="check" size={22} color="#fff" stroke={3} /></div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: T.label1, letterSpacing: -0.3 }}>You're booked</div>
          <div style={{ fontSize: 12, color: T.label2, marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {c.cls} · {c.time} {c.ampm}
          </div>
        </div>
      </div>

      {/* Credit deduction — the headline of this success state */}
      <div style={{
        background: T.surface, borderRadius: 18, padding: '14px 16px', marginBottom: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
      }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, color: T.label2, letterSpacing: 0.5, textTransform: 'uppercase' }}>
            Credits deducted
          </div>
          <div className="tnum" style={{
            fontSize: 22, fontWeight: 700, color: T.accent,
            letterSpacing: -0.6, marginTop: 2, lineHeight: 1,
          }}>
            −{cost.toFixed(cost % 1 === 0 ? 0 : 2)}
          </div>
        </div>

        {/* before → after */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: T.surface2, borderRadius: 12,
          padding: '8px 10px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 9.5, color: T.label3, fontWeight: 600, letterSpacing: 0.3, textTransform: 'uppercase' }}>Before</div>
            <div className="tnum" style={{ fontSize: 14, fontWeight: 700, color: T.label2, marginTop: 1, textDecoration: 'line-through', textDecorationColor: T.label3 }}>
              {before.toFixed(2)}
            </div>
          </div>
          <FNIcon name="arrow-r" size={14} color={T.label3} stroke={2} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 9.5, color: T.label3, fontWeight: 600, letterSpacing: 0.3, textTransform: 'uppercase' }}>After</div>
            <div className="tnum" style={{ fontSize: 14, fontWeight: 700, color: T.label1, marginTop: 1 }}>
              {after.toFixed(2)}<span style={{ color: T.label3, fontWeight: 600 }}> / 6</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: T.surface, borderRadius: 18, padding: '4px 14px', marginBottom: 14 }}>
        {[
          { l: 'Confirmation', r: <span className="tnum">#FN-48217</span> },
          { l: 'Cancel by', r: cancelBy },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', padding: '10px 0',
            borderTop: i ? `0.5px solid ${T.sep}` : 'none',
          }}>
            <span style={{ fontSize: 13, color: T.label2 }}>{row.l}</span>
            <span style={{ fontSize: 13, color: T.label1, fontWeight: 600 }}>{row.r}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <FNButton T={T} kind="secondary" leading={<FNIcon name="calendar" size={16} color={T.label1} />}>Add to calendar</FNButton>
        </div>
        <div style={{ flex: 1 }}>
          <FNButton T={T} onClick={onDone}>Done</FNButton>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenSchedule, ScreenClassDetail, ScreenBookingConfirm, ScreenWaitlistPromoted, BookingConfirmSheet });
