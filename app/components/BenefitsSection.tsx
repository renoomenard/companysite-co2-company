const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Real-Time Monitoring',
    body: 'Accurate, live CO2 readings with instant alerts when levels rise above safe thresholds, keeping your environment under constant watch.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Global Expertise',
    body: 'We operate internationally with a local approach — tailoring products and support to the specific regulations and needs of each country we serve.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Advanced Technology',
    body: 'Our monitors feature smartphone integration, data logging, and the latest NDIR CO2 sensor technology for industry-leading measurement accuracy.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Home & Commercial',
    body: 'Solutions for every environment — from residential bedrooms and home offices to large-scale commercial warehouses, schools, and healthcare facilities.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Worldwide Delivery',
    body: 'We ship globally, working with trusted couriers in each country to ensure your equipment arrives quickly and safely, wherever you are.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.41 2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Dedicated Support',
    body: 'Our customer support team is available 7 days a week to help with product selection, setup guidance, calibration advice, and after-sales assistance.',
  },
]

export default function BenefitsSection() {
  return (
    <section id="benefits" style={{ padding: '96px 0', background: 'var(--cream-100)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--ink-500)',
            margin: '0 0 12px',
          }}>
            Why Choose Us
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 500,
            color: 'var(--ink-900)',
            margin: '0 0 16px',
          }}>
            Leading Innovation in CO2 Detection &amp; Management
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 18,
            color: 'var(--ink-700)',
            maxWidth: 600,
            margin: '0 auto',
          }}>
            Empowering businesses and individuals to monitor and manage air quality with precision — ensuring safety and promoting health worldwide.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="benefits-grid">
          {benefits.map(benefit => (
            <div key={benefit.title} style={{
              background: 'white',
              borderRadius: 'var(--radius-xl)',
              padding: '28px 24px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--border)',
            }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: 'var(--cream-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                color: 'var(--ink-700)',
              }}>
                {benefit.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 22,
                fontWeight: 500,
                color: 'var(--ink-900)',
                margin: '0 0 10px',
                lineHeight: 1.2,
              }}>
                {benefit.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 16,
                lineHeight: 1.6,
                color: 'var(--ink-700)',
                margin: 0,
              }}>
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
          #benefits { padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  )
}
