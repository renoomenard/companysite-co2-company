export default function FifiSection() {
  return (
    <section id="fifi" style={{ padding: '96px 0', background: 'var(--mint-200)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'center',
        }} className="fifi-grid">

          {/* Photos */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
          }}>
            <img
              src="/assets/fifi-ceo-sleep.jpg"
              alt="Fifi the French Bulldog — CEO of Sleep, snoozing at CO2 Company HQ"
              style={{
                width: '100%',
                height: 220,
                objectFit: 'cover',
                borderRadius: 'var(--radius-xl)',
                gridColumn: '1 / span 2',
              }}
              loading="lazy"
            />
            <img
              src="/assets/fifi-sleep-mask.jpg"
              alt="Fifi the French Bulldog wearing her sleep mask"
              style={{
                width: '100%',
                height: 180,
                objectFit: 'cover',
                borderRadius: 'var(--radius-xl)',
              }}
              loading="lazy"
            />
            <img
              src="/assets/fifi-head-build.jpg"
              alt="Fifi the French Bulldog — Head of Website Build Work"
              style={{
                width: '100%',
                height: 180,
                objectFit: 'cover',
                borderRadius: 'var(--radius-xl)',
              }}
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(90,148,102,0.15)',
              borderRadius: 'var(--radius-pill)',
              padding: '5px 14px',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--mint-600)',
              marginBottom: 20,
            }}>
              Meet the Team
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 500,
              color: 'var(--ink-900)',
              margin: '0 0 20px',
              lineHeight: 1.1,
            }}>
              Meet Fifi — Our Chief Naptime Officer
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-700)', margin: '0 0 16px' }}>
              Every great company has a secret weapon. Ours is Fifi — a remarkably talented French Bulldog who holds the distinguished title of <strong>CEO of Sleep</strong> at CO2 Company HQ.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-700)', margin: '0 0 16px' }}>
              Fifi takes air quality seriously. Very, very seriously. So seriously, in fact, that she insists on testing the office air quality by napping in every corner of the building — multiple times a day — just to make sure the CO2 levels are safe enough for deep, uninterrupted sleep.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-700)', margin: '0 0 16px' }}>
              When she&apos;s not auditing nap conditions, Fifi serves as our <strong>Head of Website Build Work</strong> and <strong>Pawductivity Expert</strong>, occasionally reviewing dashboards with one eye open and a look of quiet disdain for any monitor that dares to alarm during her afternoon snooze.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.65, color: 'var(--ink-700)', margin: '0 0 20px' }}>
              Fifi officially approves of every product we ship — by sleeping next to it first. If she wakes up refreshed, you know the air quality is spot on.
            </p>
            <img
              src="/assets/fifi-stamp.jpg"
              alt="Fifi's official paw stamp of approval"
              style={{ width: 90, height: 90, borderRadius: '50%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .fifi-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 720px) {
          #fifi { padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  )
}
