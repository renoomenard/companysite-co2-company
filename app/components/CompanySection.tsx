const details = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: 'Company Name',
    value: 'CO2 Company — a division of Caruso Consulting Co Ltd',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    label: 'VAT / Tax ID',
    value: '0765554000332',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Registered Address',
    value: 'Suite 22, 47 Moo 1, T. Nawoong, Meaung, Phetchaburi, 76000, Thailand',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.41 2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+66 098 391 3877',
    href: 'tel:+66098391387',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'theteam@customersupport.care',
    href: 'mailto:theteam@customersupport.care',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    label: 'Delivery',
    value: 'We deliver Worldwide. Fast shipping from local distribution partners in each country.',
  },
]

export default function CompanySection() {
  return (
    <section id="contact" style={{ padding: '96px 0', background: 'var(--charcoal-800)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--saffron-500)',
            margin: '0 0 12px',
          }}>
            About Us
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 500,
            color: 'white',
            margin: '0 0 16px',
          }}>
            Company Details &amp; Transparency
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 17,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 560,
            margin: '0 auto',
          }}>
            CO2 Company is committed to full transparency. Here are our registered business details so you can shop with complete confidence.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="company-grid">
          {details.map(detail => (
            <div key={detail.label} style={{
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 'var(--radius-xl)',
              padding: '24px 22px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 14,
                color: 'var(--saffron-400)',
              }}>
                {detail.icon}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.45)',
                margin: '0 0 6px',
              }}>
                {detail.label}
              </h4>
              {detail.href ? (
                <a href={detail.href} style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  lineHeight: 1.5,
                }}>
                  {detail.value}
                </a>
              ) : (
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.85)',
                  margin: 0,
                  lineHeight: 1.5,
                }}>
                  {detail.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .company-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .company-grid { grid-template-columns: 1fr !important; }
          #contact { padding: 64px 0 !important; }
        }
      `}</style>
    </section>
  )
}
