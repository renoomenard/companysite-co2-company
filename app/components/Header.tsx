'use client'

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 16,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 16px',
      }}>
        <nav style={{
          width: '100%',
          maxWidth: 1200,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: 'var(--radius-pill)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border)',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
        }}>
          {/* Wordmark */}
          <a href="/" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 600,
            color: 'var(--ink-900)',
            letterSpacing: '-0.02em',
            textDecoration: 'none',
          }}>
            CO2 Company
          </a>

          {/* Desktop nav */}
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }} className="desktop-nav">
            {[
              { label: 'Shop by Country', href: '#shop-by-country' },
              { label: 'Why Us', href: '#benefits' },
              { label: 'Blog', href: '/blog/' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' },
            ].map(link => (
              <li key={link.href}>
                <a href={link.href} style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  fontWeight: 500,
                  color: 'var(--ink-700)',
                  padding: '8px 12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'background var(--dur-micro)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(27,34,53,0.05)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ marginLeft: 8 }}>
              <a href="#shop-by-country" style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--cream-50)',
                background: 'var(--ink-900)',
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                transition: 'background var(--dur-micro)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--ink-700)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink-900)')}
              >
                Shop Now
              </a>
            </li>
          </ul>

          {/* Mobile burger */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="mobile-burger"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
            }}
          >
            <span style={{ width: 22, height: 2, background: 'var(--ink-900)', display: 'block', borderRadius: 2 }}/>
            <span style={{ width: 22, height: 2, background: 'var(--ink-900)', display: 'block', borderRadius: 2 }}/>
            <span style={{ width: 22, height: 2, background: 'var(--ink-900)', display: 'block', borderRadius: 2 }}/>
          </button>
        </nav>
      </div>

      {/* Mobile full-screen drawer */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: 'var(--ink-900)',
          display: 'flex',
          flexDirection: 'column',
          padding: '32px 28px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 22,
              fontWeight: 600,
              color: 'var(--cream-50)',
            }}>
              CO2 Company
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                cursor: 'pointer',
                color: 'white',
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ×
            </button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
            {[
              { label: 'Shop by Country', href: '#shop-by-country' },
              { label: 'Why Us', href: '#benefits' },
              { label: 'Blog', href: '/blog/' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 22,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.85)',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#shop-by-country"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-sans)',
              fontSize: 17,
              fontWeight: 700,
              color: 'var(--ink-900)',
              background: 'var(--saffron-500)',
              padding: '18px',
              borderRadius: 'var(--radius-pill)',
              textDecoration: 'none',
              marginTop: 32,
            }}
          >
            Shop Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
