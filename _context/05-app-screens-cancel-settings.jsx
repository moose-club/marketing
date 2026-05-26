/* eslint-disable */
// ── Flex Network — Cancellation flow + Account/Settings ────────

// 5B · Cancellation confirm sheet
function ScreenCancelFlow({ T }) {
  const studio = 'ironworks';
  const s = FN_STUDIOS[studio];
  return (
    <div style={{ background: T.bg, height: '100%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ filter: 'blur(6px) brightness(0.55)', height: '100%' }}>
        <ScreenSessions T={T} />
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: T.surface, borderRadius: '28px 28px 0 0',
        padding: '20px 20px 50px',
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: T.label3, margin: '0 auto 18px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: `linear-gradient(135deg, ${s.p1}, ${s.p2})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{s.initial}</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: T.label1, letterSpacing: -0.3 }}>Cancel this booking?</div>
            <div style={{ fontSize: 11, color: T.label2, marginTop: 1 }}>Boxing Conditioning · Tue 6:30 PM</div>
          </div>
        </div>

        {/* In-window callout */}
        <div style={{ background: 'rgba(52,199,89,0.10)', borderRadius: 14, padding: 12, display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
          <FNIcon name="check" size={18} color={T.success} stroke={2.4} />
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.success }}>You're inside the free window</div>
            <div style={{ fontSize: 11, color: T.label2, marginTop: 2 }}>Cancellation is free up to 4 hours before class — that's <strong style={{ color: T.label1 }}>Tue 2:30 PM</strong>.</div>
          </div>
        </div>

        <div style={{ background: T.surface2, borderRadius: 14, padding: '12px 14px', marginBottom: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: T.label2 }}>Credits returned</span>
          <span className="tnum" style={{ fontSize: 13.5, fontWeight: 700, color: T.success }}>+1.5</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <FNButton T={T} kind="danger">Yes, cancel booking</FNButton>
          <FNButton T={T} kind="ghost">Keep my booking</FNButton>
        </div>
      </div>
    </div>
  );
}

// 6 · Account & settings
function ScreenAccount({ T }) {
  return (
    <div style={{ background: T.bg, height: '100%', position: 'relative', overflow: 'auto', paddingBottom: 100 }}>
      <FNTopBar T={T} />
      <div style={{ padding: '0 20px 16px' }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: T.label1, letterSpacing: -0.6 }}>Account</div>
      </div>

      {/* Profile card */}
      <div style={{ margin: '0 16px', padding: '16px', background: T.surface, borderRadius: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 60, height: 60, borderRadius: 30,
          background: `linear-gradient(135deg, ${T.accent}, ${T.dark ? '#fff' : '#000'})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: T.onAccent, fontWeight: 700, fontSize: 18,
        }}>AM</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: T.label1, letterSpacing: -0.3 }}>Alex Morgan</div>
          <div style={{ fontSize: 12, color: T.label2 }}>alex@example.com</div>
          <div style={{ marginTop: 6, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <div style={{ padding: '3px 8px', borderRadius: 6, background: 'rgba(52,199,89,0.14)', color: T.success, fontSize: 10, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase' }}>Active</div>
            <div style={{ padding: '3px 8px', borderRadius: 6, background: T.surface2, color: T.label1, fontSize: 10, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase' }}>Unlimited</div>
          </div>
        </div>
        <button style={{ background: T.surfaceTint, border: 'none', width: 36, height: 36, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FNIcon name="edit" size={18} color={T.label1} />
        </button>
      </div>

      {/* Membership info */}
      <SettingsGroup T={T} header="Membership">
        <SettingsRow T={T} icon={<FNIcon name="bolt" size={18} color={T.accent}/>} title="Home studio" detail="Flow & Co. Yoga" />
        <SettingsRow T={T} icon={<FNIcon name="card" size={18} color={T.label1}/>} title="Plan type" detail="Unlimited" />
        <SettingsRow T={T} icon={<FNIcon name="calendar" size={18} color={T.label1}/>} title="Credits resets" detail="Apr 1" last />
      </SettingsGroup>

      <SettingsGroup T={T} header="Profile">
        <SettingsRow T={T} icon={<FNIcon name="user" size={18} color={T.label1}/>} title="Personal details" detail="Edit" />
        <SettingsRow T={T} icon={<FNIcon name="phone" size={18} color={T.label1}/>} title="Phone & address" />
        <SettingsRow T={T} icon={<FNIcon name="lock" size={18} color={T.label1}/>} title="Change password" />
        <SettingsRow T={T} icon={<FNIcon name="mfa" size={18} color={T.success}/>} title="Two-factor auth" detail="On" last />
      </SettingsGroup>

      <SettingsGroup T={T} header="Support">
        <SettingsRow T={T} icon={<FNIcon name="help" size={18} color={T.label1}/>} title="Contact support" />
        <SettingsRow T={T} icon={<FNIcon name="flag" size={18} color={T.label1}/>} title="Submit a ticket" />
        <SettingsRow T={T} icon={<FNIcon name="shield" size={18} color={T.label1}/>} title="Terms & privacy" last />
      </SettingsGroup>

      <div style={{ padding: '12px 20px 0' }}>
        <button style={{
          width: '100%', background: 'transparent', border: 'none',
          padding: '14px', fontSize: 13.5, fontWeight: 600, color: T.danger,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          cursor: 'pointer', font: 'inherit',
        }}>
          <FNIcon name="logout" size={18} color={T.danger} /> Sign out
        </button>
      </div>
      <div style={{ textAlign: 'center', fontSize: 10.5, color: T.label3, padding: '4px 0 20px' }}>Moose · v1.4.2</div>
    </div>
  );
}

function SettingsGroup({ T, header, children }) {
  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ padding: '0 28px 8px', fontSize: 11, fontWeight: 700, color: T.label2, textTransform: 'uppercase', letterSpacing: 0.6 }}>{header}</div>
      <div style={{ background: T.surface, margin: '0 16px', borderRadius: 18, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function SettingsRow({ T, icon, title, detail, last }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderBottom: last ? 'none' : `0.5px solid ${T.sep}` }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: T.surface2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1, fontSize: 13.5, fontWeight: 500, color: T.label1 }}>{title}</div>
      {detail && <div style={{ fontSize: 12, color: T.label2 }}>{detail}</div>}
      <FNIcon name="chevR" size={14} color={T.label3} />
    </div>
  );
}

Object.assign(window, { ScreenCancelFlow, ScreenAccount });
