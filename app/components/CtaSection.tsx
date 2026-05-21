'use client'

export default function CtaSection() {
  return (
    <section style={{
      padding: '96px 0',
      background: 'var(--saffron-500)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 500,
          color: 'var(--ink-900)',
          margin: '0 0 16px',
          lineHeight: 1.05,
        }}>
          Ready to Breathe Better?
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 20,
          lineHeight: 1.55,
          color: 'rgba(27,34,53,0.7)',
          maxWidth: 560,
          margin: '0 auto 40px',
        }}>
          Join thousands of homes, schools, offices, and businesses that already use CO2 Company monitors to manage their indoor air quality.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#shop-by-country" style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontFamily: 'var(--font-sans)',
            fontSize: 17,
            fontWeight: 600,
            color: 'var(--ink-900)',
            background: 'white',
            padding: '14px 26px',
            borderRadius: 'var(--radius-pill)',
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(27,34,53,0.12)',
            transition: 'transform var(--dur-micro)',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Find Your Country Store
          </a>
          <a href="/blog/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontFamily: 'var(--font-sans)',
            fontSize: 17,
            fontWeight: 600,
            color: 'var(--ink-900)',
            background: 'transparent',
            padding: '14px 26px',
            borderRadius: 'var(--radius-pill)',
            border: '2px solid rgba(27,34,53,0.25)',
            textDecoration: 'none',
            transition: 'background var(--dur-micro)',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(27,34,53,0.08)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            Read Our Air Quality Blog
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #final-cta { padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  )
}
