'use client'

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      background: 'var(--cream-50)',
      overflow: 'hidden',
      paddingTop: 120,
      paddingBottom: 96,
    }}>
      {/* Radial saffron glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,210,63,0.28), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
        }} className="hero-grid">

          {/* Text side */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'white',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 14px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border)',
              marginBottom: 24,
            }}>
              <span style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--mint-600)',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--ink-700)' }}>
                Worldwide Delivery
              </span>
            </div>

            {/* Eyebrow */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--ink-500)',
              margin: '0 0 12px',
            }}>
              CO2 Monitors &amp; Air Quality
            </p>

            {/* Title */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 7.2vw, 96px)',
              fontWeight: 500,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: 'var(--ink-900)',
              margin: '0 0 24px',
              textWrap: 'balance',
            }}>
              Monitor the Air Your{' '}
              <span style={{
                background: 'var(--saffron-500)',
                display: 'inline-block',
                transform: 'rotate(-1.5deg)',
                padding: '2px 8px',
                borderRadius: 6,
              }}>
                Family Breathes
              </span>
            </h1>

            {/* Sub */}
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 20,
              lineHeight: 1.55,
              color: 'var(--ink-700)',
              margin: '0 0 32px',
              maxWidth: 520,
            }}>
              Premium CO2 monitors, air quality devices &amp; accessories serving 7 countries.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
              <a href="#shop-by-country" style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'var(--font-sans)',
                fontSize: 17,
                fontWeight: 600,
                color: 'var(--ink-900)',
                background: 'var(--saffron-500)',
                padding: '14px 26px',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-yellow)',
                transition: 'background var(--dur-micro)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--saffron-600)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--saffron-500)')}
              >
                Shop by Country
              </a>
              <a href="#benefits" style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'var(--font-sans)',
                fontSize: 17,
                fontWeight: 600,
                color: 'var(--ink-900)',
                background: 'transparent',
                padding: '14px 26px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-strong)',
                textDecoration: 'none',
                transition: 'background var(--dur-micro)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(27,34,53,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                Learn More
              </a>
            </div>

            {/* Trust strip */}
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              color: 'var(--ink-500)',
              margin: '0 0 32px',
            }}>
              Secure checkout &middot; Tracked international shipping &middot; 30-day returns
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
              {[
                { num: '7', label: 'Countries' },
                { num: '219+', label: 'Air Quality Guides' },
                { num: '10K+', label: 'Customers Served' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 36,
                    fontWeight: 600,
                    color: 'var(--ink-900)',
                    lineHeight: 1,
                    margin: '0 0 4px',
                  }}>
                    {stat.num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 13,
                    color: 'var(--ink-500)',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-image">
            <img
              src="/assets/hero.jpg"
              alt="Person enjoying clean, fresh air with a CO2 monitor"
              style={{
                width: '100%',
                maxWidth: 560,
                height: 'auto',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-md)',
              }}
              loading="eager"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image { display: none !important; }
        }
      `}</style>
    </section>
  )
}
