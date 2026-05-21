'use client'

export default function Footer() {
  const headingStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    color: 'var(--saffron-500)',
    margin: '0 0 16px',
  }

  const linkStyle = {
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: 15,
    fontFamily: 'var(--font-sans)',
    display: 'block',
    padding: '4px 0',
    transition: 'color var(--dur-micro)',
  }

  return (
    <footer style={{
      background: 'var(--charcoal-800)',
      color: 'var(--cream-50)',
      padding: '64px 0 0',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 48,
          marginBottom: 48,
        }} className="footer-grid">
          {/* Brand column */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22,
              fontWeight: 600,
              color: 'var(--cream-50)',
              margin: '0 0 12px',
              letterSpacing: '-0.02em',
            }}>
              CO2 Company
            </h4>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 'var(--radius-pill)',
              padding: '4px 12px',
              fontSize: 13,
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 16,
            }}>
              We Deliver Worldwide
            </span>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.65, margin: '0 0 12px' }}>
              A division of Caruso Consulting Co Ltd. Premium CO2 monitors and air quality devices with worldwide delivery. VAT ID: 0765554000332
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
              Suite 22, 47 Moo 1, T. Nawoong, Meaung,<br />Phetchaburi 76000, Thailand
            </p>
          </div>

          {/* Country Stores */}
          <div>
            <h5 style={headingStyle}>Country Stores</h5>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { label: 'Australia', href: 'https://co2meter.net.au' },
                { label: 'Canada', href: 'https://co2meter.shop' },
                { label: 'Europe', href: 'https://co2meter.eu.com' },
                { label: 'Ireland', href: 'https://co2meter.irish' },
                { label: 'New Zealand', href: 'https://co2meter.co.nz' },
                { label: 'United Kingdom', href: 'https://co2monitor.uk' },
                { label: 'USA', href: 'https://co2monitor.store' },
              ].map(item => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener" style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 style={headingStyle}>Company</h5>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { label: 'About Us', href: '#benefits' },
                { label: 'Meet Fifi', href: '#fifi' },
                { label: 'Blog', href: '/blog/' },
                { label: 'Contact', href: '#contact' },
              ].map(item => (
                <li key={item.href}>
                  <a href={item.href} style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 style={headingStyle}>Legal</h5>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { label: 'Privacy Policy', href: '/privacy-policy/' },
                { label: 'Terms & Conditions', href: '/terms-conditions/' },
                { label: 'Shipping & Returns', href: '/shipping-returns/' },
              ].map(item => (
                <li key={item.href}>
                  <a href={item.href} style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }} className="footer-bottom">
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
            &copy; 2025 CO2 Company — a division of Caruso Consulting Co Ltd. All rights reserved.
          </span>
          <span style={{ display: 'flex', gap: 16 }}>
            {[
              { label: 'Privacy', href: '/privacy-policy/' },
              { label: 'Terms', href: '/terms-conditions/' },
              { label: 'Shipping', href: '/shipping-returns/' },
            ].map(item => (
              <a key={item.href} href={item.href} style={{
                color: 'rgba(255,255,255,0.35)',
                fontSize: 13,
                textDecoration: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                {item.label}
              </a>
            ))}
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}
