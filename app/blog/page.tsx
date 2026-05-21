export const metadata = {
  title: 'CO2 Company Blog — Air Quality Guides & Resources',
  description: 'Expert guides on CO2 monitoring, air quality management, and indoor environment health from CO2 Company.',
}

const storeLinks = [
  { flag: '🇦🇺', label: 'Australia', href: 'https://co2meter.net.au/blog/' },
  { flag: '🇨🇦', label: 'Canada', href: 'https://co2meter.shop/blog/' },
  { flag: '🇬🇧', label: 'United Kingdom', href: 'https://co2monitor.uk/blog/' },
  { flag: '🇺🇸', label: 'USA', href: 'https://co2monitor.store/blog/' },
]

export default function BlogPage() {
  return (
    <div style={{ background: 'var(--cream-50)', minHeight: '60vh' }}>
      {/* Hero */}
      <div style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,210,63,.28), transparent 70%)',
        padding: '96px 0 64px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--ink-500)',
            margin: '0 0 12px',
          }}>
            Resources
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
            color: 'var(--ink-900)',
          }}>
            CO2 Company Blog
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 20,
            lineHeight: 1.55,
            color: 'var(--ink-700)',
            maxWidth: 520,
            margin: '0 auto',
          }}>
            Expert guides on CO2 monitoring, air quality management, and indoor environment health.
          </p>
        </div>
      </div>

      {/* Content area */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px' }}>
        <div style={{
          background: 'white',
          borderRadius: 'var(--radius-xl)',
          padding: '48px',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--border)',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 18,
            lineHeight: 1.65,
            color: 'var(--ink-700)',
            maxWidth: 500,
            margin: '0 auto 24px',
          }}>
            We have over 219 air quality guides and articles available across our country stores. Visit your local store for the full blog.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {storeLinks.map(store => (
              <a
                key={store.href}
                href={store.href}
                target="_blank"
                rel="noopener"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'var(--ink-900)',
                  background: 'var(--cream-100)',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-pill)',
                  textDecoration: 'none',
                  border: '1px solid var(--border)',
                }}
              >
                {store.flag} {store.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
